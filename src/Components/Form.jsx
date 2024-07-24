import { useEffect, useState } from "react";
import { obj } from "../Validationfunc/functions";
function Form() {
    function errorCreation(obj, text) {
        let r = document.createElement('div');
        r.innerText = `*invalid ${text}`;
        r.setAttribute('class', "error");
        r.setAttribute('id', `${text}-error`);
        obj.appendChild(r);
    }
    const [phone, setPhone] = useState('');
    const [percent, setPercent] = useState('');
    const [tName, setTName] = useState('');
    const [indExp, setIndExp] = useState('');
    const [tExp, setTExp] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
            const p = document.querySelector('#teachingExperience');
            if (!obj.isNumber(tExp) && p.value !== "") {
                let parent = p.parentElement;
                if (!parent.querySelector('.error')) {
                    p.style = 'border-bottom:3px solid red';
                    errorCreation(parent, p.getAttribute('id'))
                }
            } else {
                const errorElement = document.querySelector('#teachingExperience-error');
                if (errorElement) {
                    p.style = 'border-bottom:3px solid black';
                    errorElement.remove();
                }
            }
        }, 1000);

        return () => { clearTimeout(handler); };
    }, [tExp]);
    useEffect(() => {
        const handler = setTimeout(() => {
            const p = document.querySelector('#industryExperience');
            if (!obj.isNumber(indExp) && p.value !== "") {
                let parent = p.parentElement;
                if (!parent.querySelector('.error')) {
                    p.style = 'border-bottom:3px solid red';
                    errorCreation(parent, p.getAttribute('id'))
                }
            } else {
                const errorElement = document.querySelector('#industryExperience-error');
                if (errorElement) {
                    p.style = 'border-bottom:3px solid black';
                    errorElement.remove();
                }
            }
        }, 1000);

        return () => { clearTimeout(handler); };
    }, [indExp]);
    useEffect(() => {
        const handler = setTimeout(() => {
            const p = document.querySelector('#percentageMarks');
            if (!obj.isPercentValidate(percent) && p.value !== "") {
                let parent = p.parentElement;
                if (!parent.querySelector('.error')) {
                    p.style = 'border-bottom:3px solid red';
                    errorCreation(parent, p.getAttribute('id'))
                }
            } else {
                const errorElement = document.querySelector('#percentageMarks-error');
                if (errorElement) {
                    p.style = 'border-bottom:3px solid black';
                    errorElement.remove();
                }
            }
        }, 1000);

        return () => { clearTimeout(handler); };
    }, [percent]);

    useEffect(() => {
        const handler = setTimeout(() => {
            const p = document.querySelector('#phoneNo');
            if ((!obj.isNumber(phone) && p.value !== "")) {
                let parent = p.parentElement;
                if (!parent.querySelector('.error')) {
                    p.style = 'border-bottom:3px solid red';
                    errorCreation(parent, p.getAttribute('id'))
                }
            } else {
                const errorElement = document.querySelector('#phoneNo-error');
                if (errorElement) {
                    p.style = 'border-bottom:3px solid black';
                    errorElement.remove();
                }
            }
        }, 1000);

        return () => { clearTimeout(handler); };
    }, [phone]);
    useEffect(() => {
        const handler = setTimeout(() => {
            const p = document.querySelector('#teacherName');
            if (!obj.isCharacter(tName) && p.value !== "") {
                let parent = p.parentElement;
                if (!parent.querySelector('.error')) {
                    p.style = 'border-bottom:3px solid red';
                    errorCreation(parent, p.getAttribute('id'))
                }
            } else {
                const errorElement = document.querySelector('#teacherName-error');
                if (errorElement) {
                    p.style = 'border-bottom:3px solid black';
                    errorElement.remove();
                }
            }
        }, 1000);

        return () => { clearTimeout(handler); };
    }, [tName]);

    const phonehandle = (e) => {
        setPhone(e.target.value)
    }
    const percenthandle = (e) => {
        setPercent(e.target.value)
    }
    const nameHandle = (e) => {
        setTName(e.target.value)
    }
    const indExpHandle = (e) => {
        setIndExp(e.target.value)
    }
    const tExpHandle = (e) => {
        setTExp(e.target.value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (document.querySelector(".error")) {
            alert("Please verify your inputs");
            return;
        }
        const form = document.querySelector('form');
        const formdata = new FormData(form);
        let col = []
        for (const [keys, values] of formdata.entries()) {
            col.push(keys)
        }
        const res = await fetch("http://127.0.0.1:5000/ad", { method: "POST",headers:{'Content-Type':'application/json'}, body: JSON.stringify({ 'columns': col }) });
        const ress = await res.json();
        if (ress['result']===true) {

            const response = await fetch("http://127.0.0.1:5000/add", { method: "POST", body: formdata });
            const result = await response.json();
            if (result['success']) {
                form.reset();
                window.location.href = "/submit";
            }
            else {
                alert(result.message);
            }
        }
        else{
            alert("dsdf",ress['message'])
        }
    }
    return (
        <>
            <form className="form-container" encType="multipart/form-data" onSubmit={handleSubmit}>
                <h2>Teaching Faculty Details</h2>

                <div className="field">
                    <label for="departmentName">Department Name<span className="required">*</span></label>
                    <input type="text" id="departmentName" name="departmentName" placeholder="Department Name" required></input>
                </div>

                <div className="field">
                    <label for="designationDateOfJoining">Designation at Date Of Joining<span className="required">*</span></label>
                    <input type="text" id="designationDateOfJoining" name="designationDateOfJoining" placeholder="Enter the designation at date of joining" required></input>
                </div>

                <div className="field">
                    <label for="teacherName">Teacher Name<span className="required">*</span></label>
                    <input type="text" value={tName} onChange={(e) => nameHandle(e)} id="teacherName" name="teacherName" placeholder="Teacher Name" required></input>
                </div>

                <div className="field">
                    <label for="qualification">Qualification<span className="required">*</span></label>
                    <input type="text" id="qualification" name="qualification" placeholder="Qualification" required></input>
                </div>

                <div className="field">
                    <label for="specialization">Specialization<span className="required">*</span></label>
                    <input type="text" id="specialization" name="specialization" placeholder="Specialization" required></input>
                </div>

                <div className="field">
                    <label for="joinDate">Date Of Joining<span className="required">*</span></label>
                    <input type="date" id="joinDate" name="joinDate" required></input>
                </div>

                <div className="field">
                    <label for="basicPay">Present Basic Pay<span className="required">*</span></label>
                    <input type="text" id="basicPay" name="basicPay" placeholder="Present Basic Pay" required></input>
                </div>

                <div className="field">
                    <label for="appointmentLetter">Appointment Letter No.<span className="required">*</span></label>
                    <input type="text" id="appointmentLetter" name="appointmentLetter" placeholder="Enter Appointment Letter No." required></input>
                </div>

                <div className="field">
                    <label for="approvalDate">University Approval Date<span className="required">*</span></label>
                    <input type="date" id="approvalDate" name="approvalDate" required></input>
                </div>

                <div className="field">
                    <label for="teacherType">Designation Type<span className="required">*</span></label>
                    <select id="teacherType" name="teacherType" required>
                        <option value="">-- Select Teacher Type --</option>
                        <option value="Visiting">Visiting</option>
                        <option value="Regular">Regular</option>
                    </select>
                </div>

                <div className="field">
                    <label for="currentDesignation">Present/Current Designation<span className="required">*</span></label>
                    <input type="text" id="currentDesignation" name="currentDesignation" placeholder="Enter the present/current designation" required></input>
                </div>

                <div className="field">
                    <label for="programme">Programme Associated With<span className="required">*</span></label>
                    <select id="programme" name="programme" required>
                        <option value="">Select Programmes-</option>
                        <option value="(BACHELOR OF COMMERCE): (BUSINESS ADMINISTRATION)">(BACHELOR OF COMMERCE): (BUSINESS ADMINISTRATION)</option>
                        <option value="(BACHELOR OF COMMERCE): (BANKING, FINANCIAL SERVICES AND INSURANCE)">(BACHELOR OF COMMERCE): (BANKING, FINANCIAL SERVICES AND INSURANCE)</option>
                        <option value="(MASTER OF COMMERCE): (BUSINESS MANAGEMENT)">(MASTER OF COMMERCE): (BUSINESS MANAGEMENT)</option>
                        <option value="(MASTER OF COMMERCE): (BANKING & FINANCE)">(MASTER OF COMMERCE): (BANKING & FINANCE)</option>
                        <option value="(MASTER OF COMMERCE): M.Sc.(FINANCE)">(MASTER OF COMMERCE): M.Sc.(FINANCE)</option>
                        <option value="(MASTER OF SCIENCE): (INFORMATION TECHNOLOGY)">(MASTER OF SCIENCE): (INFORMATION TECHNOLOGY)</option>
                        <option value="(BACHELOR OF SCIENCE): (COMPUTER SCIENCE)">(BACHELOR OF SCIENCE): (COMPUTER SCIENCE)</option>
                        <option value="(BACHELOR OF SCIENCE) : (INFORMATION TECHNOLOGY)">(BACHELOR OF SCIENCE) : (INFORMATION TECHNOLOGY)</option>
                        <option value="(BACHELOR OF ARTS): MULTIMEDIA AND MASS COMMUNICATION">(BACHELOR OF ARTS): MULTIMEDIA AND MASS COMMUNICATION</option>
                        <option value="(BACHELOR OF SCIENCE): (DATA SCIENCE)">(BACHELOR OF SCIENCE): (DATA SCIENCE)</option>
                        <option value="(BACHELOR OF SCIENCE): (COMPUTER APPLICATIONS)">(BACHELOR OF SCIENCE): (COMPUTER APPLICATIONS)</option>
                        <option value="(BACHELOR OF COMMERCE): (BUSINESS ADMINISTRATION)">(BACHELOR OF COMMERCE): (BUSINESS ADMINISTRATION)</option>
                        <option value="(BACHELOR OF COMMERCE): COMMERCE">(BACHELOR OF COMMERCE): COMMERCE</option>
                        <option value="(MASTER OF COMMERCE): ADVANCED ACCOUNTANCY">(MASTER OF COMMERCE): ADVANCED ACCOUNTANCY</option>
                        <option value="(BACHELOR OF COMMERCE): (ACCOUNTING & FINANCE)">(BACHELOR OF COMMERCE): (ACCOUNTING & FINANCE)</option>
                        <option value="(BACHELOR OF COMMERCE): (BANKING & INSURANCE)">(BACHELOR OF COMMERCE): (BANKING & INSURANCE)</option>
                        <option value="(BACHELOR OF COMMERCE): (FINANCIAL MARKETS)">(BACHELOR OF COMMERCE): (FINANCIAL MARKETS)</option>
                        <option value="(BACHELOR OF COMMERCE): (MANAGEMENT STUDIES)">(BACHELOR OF COMMERCE): (MANAGEMENT STUDIES)</option>
                    </select>
                </div>

                <div className="field">
                    <label for="percentageMarks">Percentage Of Marks<span className="required">*</span></label>
                    <input type="text" value={percent} onChange={(e) => percenthandle(e)} id="percentageMarks" name="percentageMarks" placeholder="Percentage Of Marks" required></input>
                </div>

                <div className="field">
                    <label for="teachingExperience">Years Of Teaching Experience<span className="required">*</span></label>
                    <input type="text" value={tExp} onChange={(e) => tExpHandle(e)} id="teachingExperience" name="teachingExperience" placeholder="Years Of Teaching Experience" required></input>
                </div>
                <div className="field">
                    <label for="industryExperience">Total Industry Experience<span className="required">*</span></label>
                    <input type="text" value={indExp} onChange={(e) => indExpHandle(e)} id="industryExperience" name="industryExperience" placeholder="Total Industry Experience" required></input>
                </div>

                <div className="field">
                    <label for="birthDate">Birth Date<span className="required">*</span></label>
                    <input type="date" id="birthDate" name="birthDate" max="2005-01-01" required></input>
                </div>

                <div className="field">
                    <label for="scalePay">Scale Of Pay<span className="required">*</span></label>
                    <select id="scalePay" name="scalePay" required>
                        <option value="">-- Pay --</option>
                        <option value="Level1">Level1</option>
                        <option value="Level2">Level2</option>
                        <option value="Level3">Level3</option>
                        <option value="Level4">Level4</option>
                        <option value="Level5">Level5</option>
                        <option value="Level6">Level6</option>
                        <option value="Level7">Level7</option>
                        <option value="Level8">Level8</option>
                        <option value="Level9">Level9</option>
                        <option value="Level10">Level10</option>
                        <option value="Level11">Level11</option>
                        <option value="Level12">Level12</option>
                    </select>
                </div>

                <div className="field">
                    <label for="totalEmoluments">Total Emoluments<span className="required">*</span></label>
                    <input type="text" id="totalEmoluments" name="totalEmoluments" placeholder="Total Emoluments" required></input>
                </div>

                <div className="field">
                    <label for="phoneNo">Phone No<span className="required">*</span></label>
                    <input type="text" id="phoneNo" onChange={(e) => phonehandle(e)} name="phoneNo" minLength={10} maxLength={10} placeholder="Phone No" required></input>
                </div>

                <div className="field">
                    <label for="resume">Resume<span className="required">*</span></label>
                    <input type="file" id="resume" name="resume" placeholder="cv" accept="*/*" required></input>
                </div>

                <div className="field">
                    <label for="photo">Photo Image<span className="required">*</span></label>
                    <input type="file" id="photo" name="photo" placeholder="image" accept="image/*" required></input>
                </div>

                <button type="submit" className="submit-button">submit</button>
            </form>


        </>

    );
}
export default Form;