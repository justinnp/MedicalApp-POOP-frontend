import React, {Component} from 'react';
import {Card, CardTitle, CardText, Progress, Navbar, Row, UncontrolledAlert, Form, FormGroup, Input, InputGroup, InputGroupAddon, Button, ListGroup, ListGroupItem} from 'reactstrap';
import ToolBar from './ToolBar';
import '../landingpage.css';

//byPatient:${this.props.location.state.patientId}
class AddMedicalHistory extends Component {
        state = {
          medicalhistory:null,
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
componentDidMount(){
    let id = this.props.match.params.id;
    this.setState({
        id: id
    })
}

updateMedicalHistory(){
            var medicalHistoryToUpdate = {
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
            fetch('http://127.0.0.1:5000/api/medicalHistory', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(medicalHistoryToUpdate)
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
                        <InputGroupAddon addonType="append">
                            <Button outline color="warning" onClick={() => this.updateMedicalHistory()}>Add</Button>
                        </InputGroupAddon>
                </FormGroup>
            </Form>
            </div>
        )
    }
}

export default AddMedicalHistory;
