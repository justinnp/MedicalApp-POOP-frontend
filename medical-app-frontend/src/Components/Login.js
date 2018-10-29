import React, { Component } from 'react';
import {Form, FormGroup, Label, Input, Container, Button} from 'reactstrap';
import {Redirect} from 'react-router-dom';
import ToolBar from './ToolBar';
import '../landingpage.css';


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: false
        }
        this.setRedirect = this.setRedirect.bind(this);
    }

    getInfo(e, stateField){
        this.setState({
            [stateField]: e.target.value
        })
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    redirectTo(){
        if(this.state.redirect){
            return(
                <Redirect to='/home' />
            );
        }
        else return null
    }

    render() {
        return (
            <div class="landingPage">  
                <ToolBar register={true} login={false}/>
                <Container style={{width:'40vw'}} className="mt-5">
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Username</Label>
                            <Input onChange={(e) => this.getInfo(e, "username")} type="username" name="username" id="exampleEmail"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input onChange={(e) => this.getInfo(e, "password")} type="password" name="password" id="examplePassword"/>
                        </FormGroup>
                        <Button color="info" block onClick={this.setRedirect}>
                            Login
                        </Button>
                        {this.redirectTo()}
                    </Form>
                </Container>
            </div>
        )
    }
}

export default Login;
