import React, { Component } from 'react'
import {Row, Col, Container, Card, CardTitle, CardText} from 'reactstrap';
import { IoIosChatboxes, IoIosHeart, IoIosCall, IoIosMedkit, IoMdCalendar } from "react-icons/io";
import { FaPills } from 'react-icons/fa';
import ToolBar from './ToolBar';

class Home extends Component {
    render() {
        return (
            <div class="home" style={{textAlign: "center"}}>
                <ToolBar loggedIn={true} register={true} login={true}/>
                <Container className="mt-5">
                <Row>
                    <Col sm={4} className="mb-4">
                        <Card body>
                            <IoIosHeart size={42} color='#D22C34' style={{margin: 'auto'}}/>
                            <CardTitle className="mt-3">Medical History</CardTitle>
                        </Card>
                    </Col>
                    <Col sm={4} className="mb-4">
                        <Card body>
                            <FaPills size={42} color='#EC83AB' style={{margin: 'auto'}}/>
                            <CardTitle className="mt-3">Prescriptions</CardTitle>
                        </Card>
                    </Col>
                    <Col sm={4} className="mb-4">
                        <Card body>
                            <IoIosMedkit size={42} color='#04617C' style={{margin: 'auto'}}/>
                            <CardTitle className="mt-3">Insurance Information</CardTitle>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} className="mb-4">
                        <Card body>
                            <IoIosCall size={42} color='#00D44A' style={{margin: 'auto'}}/>
                            <CardTitle className="mt-3">Contact Practice</CardTitle>
                        </Card>
                    </Col>
                    <Col sm={4} className="mb-4">
                        <Card body>
                            <IoMdCalendar size={42} color='#3763CA' style={{margin: 'auto'}}/>
                            <CardTitle className="mt-3">Appointments</CardTitle>
                        </Card>
                    </Col>
                    <Col sm={4} className="mb-4">
                        <Card body>
                            <IoIosChatboxes size={42} color='#41B3FB' style={{margin: 'auto'}}/>
                            <CardTitle className="mt-3">Ask Your Doctor</CardTitle>
                        </Card>
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}

export default Home;
