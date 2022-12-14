import React from 'react'
import { NavLink } from "react-router-dom";
import { signin } from '../Service/firebase';
 function inputform(){
    return(
        <>
        <div className='form'>
            <h1>fill out the form</h1>
            <input placeholder='enter your name'></input>
            <br></br>
            <input placeholder='enter your name'></input>
            <br></br>
            <input   placeholder='enter your name'></input>
            <br></br>
            <button>submit</button>
        </div>
        </>
    )
 }
 export default inputform;