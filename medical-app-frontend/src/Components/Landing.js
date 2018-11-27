import React from 'react';
import { IoIosPeople } from "react-icons/io";
import ToolBar from './ToolBar';
import '../landingpage.css';

const Landing = () => {
    return (
        <div className="landingPage">
            <ToolBar login={false} register={false}/>
            <h1 className="logoTitle" style={{fontFamily: "Sans-Serif"}}>Patient Connect <span><IoIosPeople size={56}/></span></h1>
        </div>
    )
}

export default Landing;
