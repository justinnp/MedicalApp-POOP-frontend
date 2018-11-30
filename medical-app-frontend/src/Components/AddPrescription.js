import React, {Component} from 'react';
import {Card, CardTitle, CardText, Progress, Navbar, Row, UncontrolledAlert, Form, FormGroup, Input, InputGroup, InputGroupAddon, Button, ListGroup, ListGroupItem} from 'reactstrap';
import ToolBar from './ToolBar';
import '../landingpage.css';

//byPatient:${this.props.location.state.patientId}
var url = 'http://127.0.0.1:5000/api/prescriptions'
class AddPrescription extends Component {
        state = {
            id: null,
            addRx:null,
            addPreName: null,
            addQuantity:null,
            addDose:null,
            addInstructions:null,
            addDetails:null,
            addNumRefills:null,
            addRefillDate:null,
            addExpirationDate:null,
        }
componentDidMount(){
    let id = this.props.match.params.id;
    this.setState({
        id: id
    })
}

addPrescription(){
            var prescriptionToAdd = {
                Rx: this.state.addRx,
                name:this.state.addPreName,
                quantity:this.state.addQuantity,
                dose:this.state.addDose,
                instructions: this.state.addInstructions,
                details:this.state.addDetails,
                datePrescribed:Date.now(),
                numRefills:this.state.addNumRefills,
                refillDate:this.state.addRefillDate,
                expirationDate:Date.now(),
                prescribedTo:this.state.id,
                prescribedBy:this.state.id,
                __v: 0
            }
            fetch('http://127.0.0.1:5000/api/prescriptions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(prescriptionToAdd)
            })
            .then(response => response.json())
            .then(responseData => {
                if(responseData.success){
                  console.log(responseData);
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
        return(
            <div className="landingPage" style={{overflow: "hidden"}}>
            <ToolBar home={true} register={true} login={true} addPrescription={true} id={this.state.id}/>
            <Form className="w-50 mx-auto mt-5">
                <FormGroup className="my-5">
                        <Input placeholder="Prescription Name" onChange={(e) => this.getInfo(e, "addPreName")}/>
                        <InputGroup>
                            <Input placeholder="Quantity" onChange={(e) => this.getInfo(e, "addQuantity")}/>
                            <Input placeholder="Dose" onChange={(e) => this.getInfo(e, "addDose")}/>
                            <Input placeholder="Rx" onChange={(e) => this.getInfo(e, "addRx")}/>
                        </InputGroup>
                        <Input placeholder="Instructions" onChange={(e) => this.getInfo(e, "addInstructions")}/>
                        <Input placeholder="Details" onChange={(e) => this.getInfo(e, "addDetails")}/>
                        <InputGroup>
                            <Input placeholder="Number of Refills" onChange={(e) => this.getInfo(e, "addNumRefills")}/>
                            <Input placeholder="Refill Date" onChange={(e) => this.getInfo(e, "addRefillDate")}/>
                        </InputGroup>
                        <InputGroupAddon addonType="append">
                            <Button outline color="warning" onClick={() => this.addPrescription()}>Add</Button>
                        </InputGroupAddon>
                </FormGroup>
            </Form>
            </div>
        )
    }
}

export default AddPrescription;