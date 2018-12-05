import React from 'react';
import {Button, Container} from 'reactstrap';
import ToolBar from './ToolBar';
import '../landingpage.css';


const LoginOption = () => {
        return (
            <div class="landingPage">  
                <ToolBar register={true} login={true} loggedIn={true}/>
                <div className="patientdoctor">
                    <Container style={{width: "60vw"}}>
                        <Button className="mb-5" block size="lg" href="/login_admin">Admin</Button>
                        <Button block size="lg" href="/login_doctor">Doctor</Button>
                    </Container>
                </div>
            </div>
        )
}

export default LoginOption;
