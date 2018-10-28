import React from 'react';
import { IoIosPeople } from "react-icons/io";
import ToolBar from './ToolBar';
import '../landingpage.css';


const Landing = () => {
    return (
        <div>   
            <ToolBar login={false} register={false}/>
            <h1 style={{fontFamily: "Sans-Serif"}}>Patient Connect <span><IoIosPeople size={56}/></span></h1>
        </div>
    )
}

export default Landing;
