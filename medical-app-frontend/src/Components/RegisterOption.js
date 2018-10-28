import React from 'react';
import {Button, Container} from 'reactstrap';
import ToolBar from './ToolBar';
import '../landingpage.css';


const RegisterOption = () => {
        return (
            <div>
                <ToolBar login={true} register={false} />
                <div className="patientdoctor">
                    <Container style={{width: "60vw"}}>
                        <Button className="mb-5" block size="lg" href="/register_patient">Patient</Button>
                        <Button block size="lg" href="/register_doctor">Doctor</Button>
                    </Container>
                </div>
            </div>
        )
}

export default RegisterOption;
