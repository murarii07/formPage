// import './App.css';
import Form from './Components/Form';
import './form.css';
import RespondedMessage from './Components/Responded';
import Tables from './Components/Table';  // Ensure correct import
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import NotFound from './Components/notFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route   path='/' Component={Form}></Route>
          <Route path='/details' Component={Tables}></Route>
          <Route path='/submit' Component={RespondedMessage}></Route>
          <Route component={NotFound} /> 
      </Switch>
    </BrowserRouter>
    </div >
  );
}

export default App;
