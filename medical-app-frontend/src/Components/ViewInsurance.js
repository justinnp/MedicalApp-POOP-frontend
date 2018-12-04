import React, {Component} from 'react';
import {Card, CardTitle, CardText, Progress, Navbar, Row, UncontrolledAlert, Form, FormGroup, Input, InputGroup, InputGroupAddon, Button, ListGroup, ListGroupItem} from 'reactstrap';
import ToolBar from './ToolBar';
import '../landingpage.css';

//byPatient:${this.props.location.state.patientId}
var url = 'http://127.0.0.1:5000/api/insurances'
class ViewInsurance extends Component {
    state = {
        insurance: [],
        patientId: null,
        provider: null,
        groupNum: null,
        identificationNum: null,
        planType: null,
        dateEffective: null,
    }


    componentDidMount(){
        let id = this.props.match.params.id;
        fetch(url+'/'+id)
            .then(response => response.json())
            .then(responseData =>{
                console.log(responseData);
                this.setState({
                  insurance: responseData,
                  id: id,
                  provider: responseData[0].provider,
                  groupNum: responseData[0].groupNum,
                  identificationNum: responseData[0].identificationNum,
                  planType: responseData[0].planType,
                  dateEffective: responseData[0].dateEffective,
                })
            })
            .catch(error => console.log('error', error));
    }

    // () => deletePrescription()

    render() {
                return(
                    <div className="landingPage" style={{overflow: "hidden"}}>
                        <ToolBar home={true} register={true} login={true} viewPrescription={false} id={this.state.id}/>
                        <Card body>
                            <CardTitle>
                                <div className="d-flex">
                                    Provider: {this.state.provider}&nbsp;&nbsp;
                                    Group Number: {this.state.groupNum}&nbsp;&nbsp;
                                    identification Number: {this.state.identificationNum}&nbsp;&nbsp;
                                    Plan Type: {this.state.planType}<br/><br/>
                                    Date Effective: {this.state.dateEffective}&nbsp;&nbsp;
                                </div>
                            </CardTitle>
                        </Card>
                    </div>
                );
        }
}

export default ViewInsurance;
