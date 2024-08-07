// import './App.css';
import Form from './Components/Form';
import './form.css';
import RespondedMessage from './Components/Responded';
import Tables from './Components/Table';  // Ensure correct import
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form />}></Route>
          <Route path='/details' element={<Tables />}></Route>
          <Route path='/submit' element={<RespondedMessage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
