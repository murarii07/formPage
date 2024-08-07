// import './App.css';
import Form from './Components/Form';
import './form.css';
import RespondedMessage from './Components/Responded';
import Tables from './Components/Table';  // Ensure correct import
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NotFound from './Components/notFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Form />}></Route>
          <Route exact path='/details' element={<Tables />}></Route>
          <Route exact path='/submit' element={<RespondedMessage />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
