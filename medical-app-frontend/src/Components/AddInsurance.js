import React, {Component} from 'react';
import {Card, CardTitle, CardText, Progress, Navbar, Row, UncontrolledAlert, Form, FormGroup, Input, InputGroup, InputGroupAddon, Button, ListGroup, ListGroupItem} from 'reactstrap';
import ToolBar from './ToolBar';
import '../landingpage.css';

//byPatient:${this.props.location.state.patientId}
class AddInsurance extends Component {
        state = {
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
}

updateInsurance(){
            var insuranceToUpdate = {
              patientId: this.state.id,
              provider: this.state.provider,
              groupNum: this.state.groupNum,
              identificationNum: this.state.identificationNum,
              planType: this.state.planType,
              office: 1,
              RxGeneric: 1,
              RxBrand: 1,
              specialist: 1,
              ER: 1,
              dateEffective: this.state.dateEffective,
            }
            fetch('https://med-data-92861.herokuapp.com/api/insurances', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(insuranceToUpdate)
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
                            <Input placeholder="Provider" onChange={(e) => this.getInfo(e, "provider")}/>
                            <Input placeholder="Group Number" onChange={(e) => this.getInfo(e, "groupNum")}/>
                            <Input placeholder="Identification Number" onChange={(e) => this.getInfo(e, "identificationNum")}/>
                            <Input placeholder="Plan Type" onChange={(e) => this.getInfo(e, "planType")}/>
                            <Input placeholder="Date Effective" onChange={(e) => this.getInfo(e, "dateEffective")}/>
                        </InputGroup>
                        <InputGroupAddon addonType="append">
                            <Button outline color="warning" onClick={() => this.updateInsurance()}>Add</Button>
                        </InputGroupAddon>
                </FormGroup>
            </Form>
            </div>
        )
    }
}

export default AddInsurance;
