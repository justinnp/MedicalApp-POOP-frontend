import React, {Component} from 'react';
import {Col, Alert, Card, CardTitle, CardText, Progress, Navbar, Row, UncontrolledAlert, Form, FormGroup, Input, InputGroup, InputGroupAddon, Button, ListGroup, ListGroupItem} from 'reactstrap';
import ToolBar from './ToolBar';
import '../landingpage.css';

//byPatient:${this.props.location.state.patientId}
var url = 'https://med-data-92861.herokuapp.com/api/prescriptions'
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
            added: false
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
            fetch('https://med-data-92861.herokuapp.com/api/prescriptions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(prescriptionToAdd)
            })
            .then(response => response.json())
            .then(responseData => {
                this.setState({
                    added:true
                })
            })
            .catch(error => console.error('Error:', error));
            
        }
    getInfo = (e, stateField) => {
        this.setState({
            [stateField]: e.target.value
        });
    }
    addedPrescription(){
        if(this.state.added){
            return(<Alert>Successfully Added!</Alert>)
        } else return null
    }

    render() {
        return(
            <div className="landingPage" style={{overflow: "hidden"}}>
            <ToolBar home={true} viewPrescription={true} id={this.state.id}/>
            <Form className="w-50 mx-auto mt-5">
                <FormGroup className="my-5">
                        <Input placeholder="Prescription Name" onChange={(e) => this.getInfo(e, "addPreName")}/>
                </FormGroup>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Input placeholder="Quantity" onChange={(e) => this.getInfo(e, "addQuantity")}/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                                    <Input placeholder="Dose" onChange={(e) => this.getInfo(e, "addDose")}/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                                    <Input placeholder="Rx" onChange={(e) => this.getInfo(e, "addRx")}/>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                        <Input placeholder="Instructions" onChange={(e) => this.getInfo(e, "addInstructions")}/>
                </FormGroup>
                <FormGroup>
                        <Input placeholder="Details" onChange={(e) => this.getInfo(e, "addDetails")}/>
                </FormGroup>
                <FormGroup>
                            <Input placeholder="Number of Refills" onChange={(e) => this.getInfo(e, "addNumRefills")}/>
                </FormGroup>
                <FormGroup>
                            <Input placeholder="Refill Date" onChange={(e) => this.getInfo(e, "addRefillDate")}/>
                </FormGroup>
                <FormGroup>
                        <InputGroupAddon addonType="append">
                                <Button outline color="warning" onClick={() => this.addPrescription()}>Add Prescription</Button>
                                {this.addedPrescription()}
                        </InputGroupAddon>
                </FormGroup>
            </Form>
            </div>
        )
    }
}

export default AddPrescription;