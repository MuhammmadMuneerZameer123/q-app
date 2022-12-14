import React from 'react'
import { NavLink } from "react-router-dom";
import { signin } from '../Service/firebase';

 function  user(){
    return(
        <div>
            <NavLink to="/Form">
            <h1>welcome to my page</h1>
            <button onClick={signin}>click</button>
            </NavLink>
        </div>
       
        
    )
 }
 export default user; 