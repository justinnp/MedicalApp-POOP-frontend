import React, {Component} from 'react';
import {Card, CardTitle, CardText, Progress, Navbar, Row, UncontrolledAlert, Form, FormGroup, Input, InputGroup, InputGroupAddon, Button, ListGroup, ListGroupItem} from 'reactstrap';
import ToolBar from './ToolBar';
import '../landingpage.css';

//byPatient:${this.props.location.state.patientId}
var url = 'http://127.0.0.1:5000/api/medicalHistory'
class ViewPrescriptions extends Component {
    state = {
        medicalhistory:null,
        id: null,
        sex: null,
        height: null,
        weight: null,
        heartDisease: null,
        highbPressure: null,
        stroke: null,
        pacemaker: null,
        respiratoryDisease: null,
        siezures: null,
        anemia: null,
        liverDisease: null,
        kidneyDisease: null,
        diabetes: null,
        cancer: null,
        allergies: null,
        alcohol: null,
        smoke: null,
    }


        deleteMedicalHistory(deletion){
            console.log(deletion);
            fetch('http://127.0.0.1:5000/api/medicalHistory/'+deletion,{
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
        console.log(id);
        fetch(url+'/'+id)
            .then(response => response.json())
            .then(responseData =>{
                console.log(responseData);
                this.setState({
                    medicalhistory: responseData,
                    id: id
                })
                console.log(this.state.medicalhistory);
            })
            .catch(error => console.log('error', error));
    }

    // () => deletePrescription()

    render() {
        const {medicalhistory} = this.state;
        const medicalhist = medicalhistory ?(
                medicalhistory =>{
                    return(
                                <Card body className="mx-2 my-3" key={medicalhistory.id}>
                                    <CardTitle>
                                        <div className="d-flex">
                                            <div className="blink_me">{medicalhistory.sex}</div> &nbsp;
                                            <div className="ml-auto">
                                                <Button outline color="warning" onClick={()=>this.deleteMedicalHistory(medicalhistory._id)}>Delete</Button>
                                            </div>
                                        </div>
                                    </CardTitle>
                                </Card>
                    );
              }
        ):(
            <div className="center">No Medical History</div>
        )
                return(
                    <div className="landingPage" style={{overflow: "hidden"}}>
                        <ToolBar home={true} register={true} login={true} viewPrescription={true} id={this.state.id}/>
                        <div className="prescriptionList">
                            {medicalhist}
                        </div>
                    </div>
                )
    }
}

export default ViewPrescriptions;
