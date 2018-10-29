import React, { Component } from 'react';
import {Row, Col, Form, FormGroup, Label, Input, Container, Button} from 'reactstrap';
import PropTypes from 'prop-types';
import ToolBar from './ToolBar';
import '../landingpage.css';


class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            doctor: false,
        }
        this.getInfo = this.getInfo.bind(this);
    }

    getInfo(e, stateField){
        this.setState({
            [stateField]: e.target.value
        })
    }

    createUser(){

    }

    render() {
        return (
            <div class="landingPage">  
                <ToolBar login={true} register={false}/>
                <Container style={{width:'40vw'}} className="mt-5">
                    <Form>
                        {this.props.isPatient ? 
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleEmail">First Name</Label>
                                        <Input onChange={(e) => this.getInfo(e, "firstName")} placeholder="i.e. John" type="username" name="first"/>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Last Name</Label>
                                        <Input onChange={(e) => this.getInfo(e, "lastName")} placeholder="i.e. Smith" type="username" name="last"/>
                                    </FormGroup>
                                </Col>
                            </Row> : null
                        }
                        {
                            this.props.isPatient ? 
                            <FormGroup>
                                <Label for="examplePassword">Doctor's Last Name</Label>
                                <Input onChange={(e) => this.getInfo(e, "username")} placeholder="i.e. Martinez" type="password" name="username"/>
                            </FormGroup> : null
                        }
                        {
                            this.props.isPatient ? 
                            <FormGroup>
                                <Label for="examplePassword">Username</Label>
                                <Input onChange={(e) => this.getInfo(e, "username")} type="password" name="username"/>
                            </FormGroup> : 
                            <FormGroup>
                                <Label for="examplePassword">Practice</Label>
                                <Input onChange={(e) => this.getInfo(e, "username")} type="password" name="username"/>
                            </FormGroup> 
                        }
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input onChange={(e) => this.getInfo(e, "password")} type="password" name="password"/>
                        </FormGroup>
                        <Button color="danger" block onClick={() => this.createUser()}>
                            Create {this.props.isPatient ? 'Patient' : 'Practice'}
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

Register.propTypes = {
    isPatient: PropTypes.bool
}

export default Register;
