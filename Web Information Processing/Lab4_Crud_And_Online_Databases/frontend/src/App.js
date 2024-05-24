import{BrowserRouter, Routes, Route}  from "react-router-dom";
import Basic from "./CRUD/Basic";
import Update from "./CRUD/Update";
import Add from "./CRUD/Add";
import './App.css';



function App() 
{
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Basic/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/update/:Bas_id" element={<Update/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
