import React, {Component} from 'react';
import {Alert, Card, CardTitle, CardText, Progress, Navbar, Row, UncontrolledAlert, Form, FormGroup, Input, InputGroup, InputGroupAddon, Button, ListGroup, ListGroupItem} from 'reactstrap';
import ToolBar from './ToolBar';
import {Link} from 'react-router-dom';
import '../landingpage.css';

//byPatient:${this.props.location.state.patientId}
var url = 'http://127.0.0.1:5000/api/prescriptions'
class ViewDoctors extends Component {
    state = {
        doctors: [],
        deleted: false,
        id: null,
    }

    
        deleteDoctor(deletion){
            console.log(deletion);
            fetch('http://127.0.0.1:5000/api/doctor/'+deletion,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(response => response.json())
            .then(responseData => {
              if(responseData.success){
                this.setState({
                  deleted: true
                })
              }
            })
            .catch(error => console.error('Error:', error));
        }
    

    componentDidMount(){
        let id = this.props.match.params.id;
        fetch('http://127.0.0.1:5000/api/doctor')
            .then(response => response.json())
            .then(responseData =>{
                console.log(responseData);
                this.setState({
                    doctors: responseData,
                    id: id
                })
                console.log(this.state.doctors);
            })
            .catch(error => console.log('error', error));
    }

    // () => deletePrescription()
    deleted = (e) =>{
        if(this.state.deleted){
            return(<Alert>Successfully Deleted</Alert>)
        }
    }

    render() {
        const {doctors} = this.state;
        const doctorsList = doctors.length ?(
                doctors.map(doctor =>{
                    return(
                                <Card body className="mx-2 my-3" key={doctor.id}>
                                    <CardTitle>
                                        <div className="d-flex">
                                            <Link to='/view_patients'>
                                                <div className="blink_me">Doctor Name: {doctor.firstName} {doctor.lastName}</div>
                                            </Link>
                                            <div className="ml-auto">
                                                <Button outline color="warning" onClick={()=>this.deleteDoctor(doctor._id)}>Delete</Button>
                                            </div>
                                        </div>
                                    </CardTitle>
                                    {this.deleted}
                                </Card>
                    );
                })
        ):(
            <div style={{textAlign: "center"}}>No Prescriptions</div>
        )
                return(
                    <div className="landingPage" style={{overflow: "hidden"}}>
                        <ToolBar id={this.state.id}/>
                        <div className="doctorList">
                            {doctorsList}
                        </div>
                    </div>
                )
    }
}

export default ViewDoctors;