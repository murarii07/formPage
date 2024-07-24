from flask import Flask,request,send_file
from flask_cors import CORS
import os
import pandas as pd
import shutil as sh
app = Flask(__name__)
CORS(app)
@app.route('/')
def home():
    return "Hello, World!"

dff=pd.DataFrame()
if(os.path.exists('uploads')==False):
    os.mkdir('uploads')
    os.mkdir('uploads/files')

@app.route("/ad", methods=["POST"])
def ad():
            print("ad-----------------------------------")
    #  try:
            global dff
            data=request.get_json();
            print(data)
            columns=data.get('columns')
            df=pd.DataFrame(columns=columns)
            if dff.empty==True:
                dff=df.copy()
            else:
                pass
            return {'result':True}
    #  except Exception as e:
    #       print(e)
    #       return {'result': False}
@app.route('/add', methods=['POST'])
def form():
    print("form-----------------------------------")
    try:
        global dff
        dictionary=dict(request.form)
        # print(type(request.files))
        file = request.files['photo']
        file1 = request.files['resume']
        if file and file.filename:
                filepath = os.path.join("uploads","files", file.filename) 
                file.save(filepath)
                print(f"File saved to {filepath}")
                dictionary.update({'photo':f'files\{file.filename}'})

        if file1 and file1.filename:
                filepath = os.path.join("uploads","files", file1.filename) 
                file.save(filepath)
                print(f"File saved to {filepath}")
                dictionary.update({'resume':f'files\{file1.filename}'})
        #updating the df by adding row
        dff.loc[len(dff)]=dictionary
        try:
            filename = 'outputt.xlsx'
            dff.to_excel(f"uploads/{filename}", sheet_name="main1",index=False, engine='openpyxl')
            return {"success":True}
        except Exception as e:
            return {'error': str(e)}
        # Specify the filename
    except Exception as e:
         return {'error': str(e)}
    

      
         


@app.route('/download', methods=['GET'])
def download_file():
    try:
            filename = 'outputt.xlsx'
            # Save the DataFrame to an XLSX file
            dff.to_excel(f"uploads/{filename}", sheet_name="main1",index=False, engine='openpyxl')
            sh.make_archive(f"output_Archive",base_dir="uploads",format="zip")
            sh.rmtree('uploads')
            os.mkdir('uploads') 
            os.mkdir('uploads/files')
            return send_file("output_Archive.zip", as_attachment=True)
    except Exception as e:
            return {'error': str(e)}
  

if __name__ == '__main__':
    app.run(debug=True)
