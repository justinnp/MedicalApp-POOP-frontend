import React, { Component } from 'react';
import {Form, FormGroup, Label, Input, Container, Button} from 'reactstrap';
import ToolBar from './ToolBar';
import {Redirect} from 'react-router-dom'
import '../landingpage.css';


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            doctor: null,
            redirect: false
        }
        this.getInfo = this.getInfo.bind(this);
    }

    getInfo(e, stateField){
        this.setState({
            [stateField]: e.target.value
        })
    }
    verify = (e) => {
        e.preventDefault();
        var doctor = {
            username: this.state.username,
            password: this.state.password
        }
        var admin;
        if(this.props.doctor){
            admin = 'doctor'
        }else{
                admin = 'admins'
        }
        fetch('http://127.0.0.1:5000/api/'+admin+'/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(doctor)
        })
        .then(response =>{
            if(response.status===200){
                // UserName and Password Matched
                console.log(response)
                this.setState({
                    redirect:true
                })
                console.log(this.state.doctor)
                console.log(this.state.redirect)
            }else{
                // Password Did Not Match
                console.log(response)
            }
        })
        //UserName Did Not Match
        .catch(error => console.error('Error: username is incorrect'));

    }

    redirectTo(){
        if(this.state.redirect){
            if(this.props.doctor){
                return (<Redirect to='/view_patients'/>)
            }else{
                return (<Redirect to='/view_doctors'/>)
            }
        }else return null
    }
    

    render() {
        return (
            <div class="landingPage">  
                <ToolBar register={true} login={true} loggedIn={true}/>
                <Container style={{width:'40vw'}} className="mt-5">
                    <Form onSubmit={this.verify}>
                        <FormGroup>
                            <Label for="exampleEmail">Username</Label>
                            <Input onChange={(e) => this.getInfo(e, "username")} type="username" name="username" id="exampleEmail"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input onChange={(e) => this.getInfo(e, "password")} type="password" name="password" id="examplePassword"/>
                        </FormGroup>
                        <Button color="info" block>
                            Login
                        </Button>
                    </Form>
                    {this.redirectTo()}
                </Container>
            </div>
        )
    }
}

export default Login;
