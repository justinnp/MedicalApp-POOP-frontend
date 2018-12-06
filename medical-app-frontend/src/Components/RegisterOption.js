import React from 'react';
import {Button, Container} from 'reactstrap';
import ToolBar from './ToolBar';
import '../landingpage.css';


const RegisterOption = () => {
        return (
            <div class="landingPage">  
                <ToolBar login={true} register={true} loggedIn={true}/>
                <div className="patientdoctor">
                    <Container style={{width: "60vw"}}>
                        <Button className="mb-5" block size="lg" href="/register_admin">Admin</Button>
                        <Button block size="lg" href="/register_doctor">Doctor</Button>
                    </Container>
                </div>
            </div>
        )
}

export default RegisterOption;
