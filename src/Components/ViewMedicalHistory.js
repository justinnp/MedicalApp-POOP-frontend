import React, {Component} from 'react';
import {Card, CardTitle, CardText, Progress, Navbar, Row, UncontrolledAlert, Form, FormGroup, Input, InputGroup, InputGroupAddon, Button, ListGroup, ListGroupItem} from 'reactstrap';
import ToolBar from './ToolBar';
import '../landingpage.css';

//byPatient:${this.props.location.state.patientId}
var url = 'https://med-data-92861.herokuapp.com/api/medicalHistory'
class ViewMedicalHistory extends Component {
    state = {
        medicalhistory: [],
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
            fetch('https://med-data-92861.herokuapp.com/api/medicalHistory/'+deletion,{
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
        fetch(url+'/'+id)
            .then(response => response.json())
            .then(responseData =>{
                console.log(responseData);
                this.setState({
                    medicalhistory: responseData,
                    id: id,
                    sex: responseData[0].sex,
                    height: responseData[0].height,
                    weight: responseData[0].weight,
                    heartDisease: responseData[0].heartDisease,
                    highbPressure: responseData[0].highbPressure,
                    stroke: responseData[0].stroke,
                    pacemaker: responseData[0].pacemaker,
                    respiratoryDisease: responseData[0].respiratoryDisease,
                    siezures: responseData[0].siezures,
                    anemia: responseData[0].anemia,
                    liverDisease: responseData[0].liverDisease,
                    kidneyDisease: responseData[0].kidneyDisease,
                    diabetes: responseData[0].diabetes,
                    cancer: responseData[0].cancer,
                    allergies: responseData[0].allergies,
                    alcohol: responseData[0].alcohol,
                    smoke: responseData[0].smoke,
                })
                console.log(this.state.height);
            })
            .catch(error => console.log('error', error));
    }

    // () => deletePrescription()

    render() {
                return(
                    <div className="landingPage" style={{overflow: "hidden"}}>
                        <ToolBar home={true} updateMedicalHistory={true} id={this.state.id}/>
                        <Card body>
                            <CardTitle>
                                <div className="d-flex">
                                    Sex: {this.state.sex}&nbsp;&nbsp;
                                    Height: {this.state.height}&nbsp;&nbsp;
                                    Weight: {this.state.weight}&nbsp;&nbsp;
                                    Heart Disease: {this.state.heartDisease}<br/><br/>
                                    Blood Pressure: {this.state.highbPressure}&nbsp;&nbsp;
                                    Stroke: {this.state.stroke}&nbsp;&nbsp;
                                    Pacemaker: {this.state.pacemaker}&nbsp;&nbsp;
                                    Respiratory Disease: {this.state.respiratoryDisease}<br/><br/>
                                    Siezures: {this.state.seizures}&nbsp;&nbsp;
                                    Anemia: {this.state.anemia}&nbsp;&nbsp;
                                    Liver Disease: {this.state.liverDisease}&nbsp;&nbsp;
                                    Kidney Disease: {this.state.kidneyDisease}<br/><br/>
                                    Diabetes: {this.state.diabetes}&nbsp;&nbsp;
                                    Cancer: {this.state.cancer}&nbsp;&nbsp;
                                    Allergies: {this.state.allergies}&nbsp;&nbsp;
                                    Alcohol: {this.state.alcohol}&nbsp;&nbsp;
                                    Smoke: {this.state.smoke}
                                </div>
                            </CardTitle>
                        </Card>
                    </div>
                );
        }
}

export default ViewMedicalHistory;
