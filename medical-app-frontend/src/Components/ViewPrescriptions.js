import React, {Component} from 'react';
import {Card, CardTitle, CardText, Progress, Navbar, Row, UncontrolledAlert, Form, FormGroup, Input, InputGroup, InputGroupAddon, Button, ListGroup, ListGroupItem} from 'reactstrap';
import ToolBar from './ToolBar';
import '../landingpage.css';

//byPatient:${this.props.location.state.patientId}
var url = 'http://127.0.0.1:5000/api/prescriptions'
class ViewPrescriptions extends Component {
    state = {
        prescriptions: [],
        id: null,
        addPreName: null,
        addQuantity:null,
        addDose:null,
        addRefillDate:null
    }

    
        deletePrescription(deletion){
            console.log(deletion);
            fetch('http://127.0.0.1:5000/api/prescriptions/'+deletion,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(response => response.json())
            .then(responseData => {
              if(responseData.success){
                this.setState({
                  successDelete: true
                })
                window.location.reload();
              }
            })
            .catch(error => console.error('Error:', error));
        }
    

    componentDidMount(){
        let id = this.props.match.params.id;
        fetch(url+'/byPatient'+id)
            .then(response => response.json())
            .then(responseData =>{
                console.log(responseData);
                this.setState({
                    prescriptions: responseData,
                    id: id
                })
                console.log(this.state.prescriptions);
            })
            .catch(error => console.log('error', error));
    }

    // () => deletePrescription()

    render() {
        const {prescriptions} = this.state;
        const prescriptionsList = prescriptions.length ?(
                prescriptions.map(prescription =>{
                    return(
                                <Card body className="mx-2 my-3" key={prescription.id}>
                                    <CardTitle>
                                        <div className="d-flex">
                                            <div className="blink_me">{prescription.name}</div> &nbsp;
                                            <div className="blink_me_again">{prescription.dose}</div>
                                            <div className="ml-auto">
                                                <Button outline color="warning" onClick={()=>this.deletePrescription(prescription._id)}>Delete</Button>
                                            </div>
                                        </div>
                                    </CardTitle>
                                </Card>
                    );
                })
        ):(
            <div className="center">No Prescriptions</div>
        )
                return(
                    <div className="landingPage" style={{overflow: "hidden"}}>
                        <ToolBar home={true} register={true} login={true} viewPrescription={true} id={this.state.id}/>
                        <div className="prescriptionList">
                            {prescriptionsList}
                        </div>
                    </div>
                )
    }
}

export default ViewPrescriptions;