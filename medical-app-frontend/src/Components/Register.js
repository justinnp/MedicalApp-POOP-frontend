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
            ss:'',
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
        if(this.props.isPatient){ 
        // Register Patient
            var patientToAdd = {
                username: this.state.username,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                dob: null,
                ss: '587451234',
                email: 'pgon@yahoo.com',
                phone: '4072581234',
                address: '6001 Destination Parkway',
                insurance: false,
                accountCreated: Date.now(),
                __v: 0
            }
            fetch('http://127.0.0.1:5000/api/patients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(patientToAdd)
            })
            .then(response => response.json())
            .then(responseData => {
                if(responseData.success){
                  this.setState({
                    successAdd: true
                  })
                }
            })
            .catch(error => console.error('Error:', error));

        }else{
        var doctorToAdd = {
            userId: '456789',
            username: this.state.username,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            doctorId: '123456',
            accountCreated: Date.now(),
            __v: 0
        }
        fetch('http://127.0.0.1:5000/api/doctor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(doctorToAdd)
        })
        .then(response => response.json())
        .then(responseData => {
            if(responseData.success){
              this.setState({
                successAdd: true
              })
            }
        })
        .catch(error => console.error('Error:', error));
    }
       
    }

    render() {
        return (
            <div class="landingPage">  
                <ToolBar login={true} register={false}/>
                <Container style={{width:'40vw'}} className="mt-5">
                    <Form>
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
                            </Row>
                        {
                            this.props.isPatient ? 
                            <FormGroup>
                                <Label for="examplePassword">Doctor's Last Name</Label>
                                <Input onChange={(e) => this.getInfo(e, "username")} placeholder="i.e. Martinez" type="password" name="username"/>
                            </FormGroup> : null
                        }
                            <FormGroup>
                                <Label for="examplePassword">Username</Label>
                                <Input onChange={(e) => this.getInfo(e, "username")} type="password" name="username"/>
                            </FormGroup>
                        {
                            this.props.isPatient ?
                            null :
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
