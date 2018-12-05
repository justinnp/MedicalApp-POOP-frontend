import React, {Component} from 'react';
import {Card, CardTitle, CardText, Progress, Navbar, Row, UncontrolledAlert, Form, FormGroup, Input, InputGroup, InputGroupAddon, Button, ListGroup, ListGroupItem} from 'reactstrap';
import ToolBar from './ToolBar';
import '../landingpage.css';

//byPatient:${this.props.location.state.patientId}
class AddMedicalHistory extends Component {
        state = {
          id: null,
          medicalhistory_id: null,
          patientId: null,
          provider: null,
          groupNum: null,
          identificationNum: null,
          planType: null,
          dateEffective: null,
        }
componentDidMount(){
    let id = this.props.match.params.id;
    this.setState({
        id: id
    })

    fetch('http://127.0.0.1:5000/api/medicalhistory/'+id)
        .then(response => response.json())
        .then(responseData =>{
            console.log(responseData[0]._id);
            this.setState({
                medicalhistory_id: responseData[0]._id
            })
        })
        .catch(error => console.log('error', error));
}

updatemedicalhistory(){
            var medicalhistoryToUpdate = {
              patientId: this.state.id,
              medicalhistory: this.state.medicalhistory,
              sex: this.state.sex,
              height: this.state.height,
              weight: this.state.weight,
              heartDisease: this.state.heartDisease,
              highbPressure: this.state.highbPressure,
              stroke: this.state.stroke,
              pacemaker: this.state.pacemaker,
              respiratoryDisease: this.state.respiratoryDisease,
              siezures: this.state.siezures,
              anemia: this.state.anemia,
              liverDisease: this.state.liverDisease,
              kidneyDisease: this.state.kidneyDisease,
              diabetes: this.state.diabetes,
              cancer: this.state.cancer,
              allergies: this.state.allergies,
              alcohol: this.state.alcohol,
              smoke: this.state.smoke,
              complete: null,
              dateUpdated: null,
              updatedBy: null,
            }

            fetch('http://127.0.0.1:5000/api/medicalhistory/'+this.state.medicalhistory_id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(medicalhistoryToUpdate)
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
            <ToolBar home={true} register={true} login={true} addPrescription={false} id={this.state.id}/>
            <Form className="w-50 mx-auto mt-5">
                <FormGroup className="my-5">
                <InputGroup>
                      <Input placeholder="Sex" onChange={(e) => this.getInfo(e, "sex")}/>
                      <Input placeholder="Height" onChange={(e) => this.getInfo(e, "height")}/>
                      <Input placeholder="Weight" onChange={(e) => this.getInfo(e, "weight")}/>
                      <Input placeholder="Heart Disease" onChange={(e) => this.getInfo(e, "heartDisease")}/>
                  </InputGroup>
                  <InputGroup>
                      <Input placeholder="Blood Pressure" onChange={(e) => this.getInfo(e, "highbPressure")}/>
                      <Input placeholder="Stroke" onChange={(e) => this.getInfo(e, "stroke")}/>
                      <Input placeholder="pacemaker" onChange={(e) => this.getInfo(e, "pacemaker")}/>
                      <Input placeholder="respiratoryDisease" onChange={(e) => this.getInfo(e, "respiratoryDisease")}/>
                  </InputGroup>
                  <InputGroup>
                      <Input placeholder="seizures" onChange={(e) => this.getInfo(e, "seizures")}/>
                      <Input placeholder="liverDisease" onChange={(e) => this.getInfo(e, "liverDisease")}/>
                      <Input placeholder="kidneyDisease" onChange={(e) => this.getInfo(e, "kidneyDisease")}/>
                      <Input placeholder="diabetes" onChange={(e) => this.getInfo(e, "diabetes")}/>
                  </InputGroup>
                  <InputGroup>
                      <Input placeholder="cancer" onChange={(e) => this.getInfo(e, "cancer")}/>
                      <Input placeholder="allergies" onChange={(e) => this.getInfo(e, "allergies")}/>
                      <Input placeholder="alcohol" onChange={(e) => this.getInfo(e, "alcohol")}/>
                      <Input placeholder="smoke" onChange={(e) => this.getInfo(e, "smoke")}/>
                  </InputGroup>
                        <InputGroupAddon addonType="append">
                            <Button outline color="warning" onClick={() => this.updatemedicalhistory()}>Add</Button>
                        </InputGroupAddon>
                </FormGroup>
            </Form>
            </div>
        )
    }
}

export default AddMedicalHistory;
