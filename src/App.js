import logo from './logo.svg';
import './App.css';

import{FcGoogle} from 'react-icons/fc';
import{AiFillFacebook} from 'react-icons/ai'
import Signin from './component/Signin'
import Form from "./component/Form"
import Dashboard from"./component/Dashboard"
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signin/>} />
            <Route path="/Form" element={<Form/>} />
            <Route path="/Dasboard" element={<Dashboard/>} />
            
          </Routes>
        </BrowserRouter>

    </div>
    
  );
}

export default App;
