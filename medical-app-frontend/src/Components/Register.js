import React, { Component } from 'react';
import {Alert, Row, Col, Form, FormGroup, Label, Input, Container, Button} from 'reactstrap';
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
            added: false
        }
        this.getInfo = this.getInfo.bind(this);
    }

    getInfo(e, stateField){
        this.setState({
            [stateField]: e.target.value
        })
    }

    createUser(){
        if(this.props.isAdmin){ 
        // Register Admin
            var adminToAdd = {
                username: this.state.username,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                accountCreated: Date.now(),
                __v: 0
            }
            fetch('https://med-data-92861.herokuapp.com/api/admins', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(adminToAdd)
            })
            .then(response => response.json())
            .then(responseData => {
                if(responseData.success){
                  this.setState({
                    added: true
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
        fetch('https://med-data-92861.herokuapp.com/api/doctor', {
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
                added: true
              })
            }
        })
        .catch(error => console.error('Error:', error));
    }
       
    }
    added(){
        if(this.state.added){
            return(<Alert> Successfully Registered!</Alert>);
        }else return null
    }

    render() {
        return (
            <div class="landingPage">  
                <ToolBar login={true} register={true} loggedIn={true}/>
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
                            <FormGroup>
                                <Label for="examplePassword">Username</Label>
                                <Input onChange={(e) => this.getInfo(e, "username")} type="password" name="username"/>
                            </FormGroup>
                        {
                            this.props.isAdmin ?
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
                            Create {this.props.isAdmin ? 'Admin' : 'Practice'}
                        </Button>
                        {this.added()}
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
