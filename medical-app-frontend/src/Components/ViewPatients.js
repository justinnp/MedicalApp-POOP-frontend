import React, {Component} from 'react';
import {Navbar, Row, UncontrolledAlert, Form, FormGroup, Input, InputGroup, InputGroupAddon, Button, ListGroup, ListGroupItem} from 'reactstrap';
import PatientList from './PatientList';
import ToolBar from './ToolBar';
import '../landingpage.css';


const url = 'http://127.0.0.1:5000/api/patients'
class ViewPatients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patients: [
            ]
        }
    }

/*
    componentWillMount(){
        fetch(url)
        .then(response => response.json())
        .then(responseData =>{
            const tmpPatients = [];
            for(var key in responseData){

                const patient = {
                    username: responseData[key].username,
                    id: responseData[key]._id,
                    fname: responseData[key].firstName,
                    lname: responseData[key].lastName,
                }
                tmpPatients.push(patient);
            }
            this.setState({
                patients: tmpPatients
            })
        })
        .catch(error => {
            console.log('Error fetching and parsing data.', error);
        });
    }
*/

    componentDidMount() {
        this.grabData();
    }

    grabData(){
        fetch(url)
        .then(response => response.json())
        .then(responseData =>{
            const tmpPatients = [];
            for(var key in responseData){
                const patient = {
                  username: responseData[key].username,
                  id: responseData[key]._id,
                  fname: responseData[key].firstName,
                  lname: responseData[key].lastName,
                }
                tmpPatients.push(patient);
            }

            this.setState({
                patients: tmpPatients
            })
            console.log(this.state.patients);
        })
        .catch(error => {
            console.log('Error fetching and parsing data.', error);
        });
    }

    showAddAlert(){
      if(this.state.successAdd){
        return(
          <UncontrolledAlert color="success">
              Successfully added the patient
          </UncontrolledAlert>
        )
      }
      else return null
    }

    addPatient(){
        var patientToAdd = {
            username: this.state.addFirst,
            password: this.state.addLast,
            firstName: this.state.addFirst,
            lastName: this.state.addLast,
            dob: null,
            ss: this.state.addSS,
            email: this.state.addEmail,
            phone: this.state.addPhone,
            address: this.state.addAddress,
            insurance: false,
            accountCreated: null,
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
        
    }

    getInfo = (e, stateField) => {
        this.setState({
            [stateField]: e.target.value
        });
    }

    render() {
        return (
            <div class="landingPage" style={{overflow: "hidden"}}>
                <ToolBar/>
                <Row className="pt-5">
                    <PatientList patients={this.state.patients}/>
                </Row>
                <Form className="w-50 mx-auto mt-5">
                  <FormGroup className="my-5">
                      <InputGroup>
                          <Input placeholder="First Name" onChange={(e) => this.getInfo(e, "addFirst")}/>
                          <Input placeholder="Last Name" onChange={(e) => this.getInfo(e, "addLast")}/>
                          <Input placeholder="Phone Number" onChange={(e) => this.getInfo(e, "addPhone")}/>
                          <Input placeholder="Email" onChange={(e) => this.getInfo(e, "addEmail")}/>
                          <Input placeholder="Address" onChange={(e) => this.getInfo(e, "addAddress")}/>
                          <Input placeholder="Social Security" onChange={(e) => this.getInfo(e, "addSS")}/>
                          <InputGroupAddon addonType="append">
                              <Button outline color="warning" onClick={() => this.addPatient()}>Add</Button>
                          </InputGroupAddon>
                      </InputGroup>
                  </FormGroup>
                  {this.showAddAlert()}
              </Form>
            </div>
        );
    }
}

export default ViewPatients;
