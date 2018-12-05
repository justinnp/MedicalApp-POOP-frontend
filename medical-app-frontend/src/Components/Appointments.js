import React, {Component} from 'react';
import {Navbar, Row, Col, UncontrolledAlert, Form, FormGroup, Input, InputGroup, InputGroupAddon, Button, ListGroup, ListGroupItem, Label} from 'reactstrap';
import ToolBar from './ToolBar';
import AppointmentList from './AppointmentList';
import '../landingpage.css';


const url = 'http://127.0.0.1:5000/api/appointments'


class Appointments extends Component {
	constructor(props){
		super(props)
		this.state ={
			
			appointments: [],
			id: null
		}
	}
	
	componentWillMount(){
		
		let id = this.props.match.params.id;
        fetch(url+'/byPatient'+id)
		.then(response => response.json())
        .then(responseData =>{
            const tmpAppointments = [];
            for(var key in responseData){

                const appointment = {
                    date: responseData[key].date,
					time: responseData[key].time,
                    seenBy: responseData[key].seenBy,
					createdBy: responseData[key].createdBy,
					id: responseData[key]._id,
					notes: responseData[key].notes,
                    checkedIn: responseData[key].checkedIn,
                    late: responseData[key].late,
                }
                tmpAppointments.push(appointment);
            }
            this.setState({
                appointments: tmpAppointments
            })
        })
        .catch(error => {
            console.log('Error fetching and parsing data.', error);
        });
	}
	
	componentDidMount() {
      setInterval(() => {
		let id = this.props.match.params.id;
        fetch(url+'/byPatient'+id)
        .then(response => response.json())
        .then(responseData =>{
            const tmpAppointments = [];
            for(var key in responseData){

                const appointment = {
                    date: responseData[key].date,
					time: responseData[key].time,
                    seenBy: responseData[key].seenBy,
					createdBy: responseData[key].createdBy,
					id: responseData[key]._id,
					notes: responseData[key].notes,
                    checkedIn: responseData[key].checkedIn,
                    late: responseData[key].late,
                }
                tmpAppointments.push(appointment);
            }

            var old = this.state.appointments
            // for(key in old) {
            //   if(old[key].current !== tmpPatients[key].current) {
            //     tmpGarages[key].didUpdate = true;
            //   }
            // }

            this.setState({
                appointments: tmpAppointments
            })

        })
        .catch(error => {
            console.log('Error fetching and parsing data.', error);
        });
      }, 10000);
    }
	
	showAddAlert(){
      if(this.state.successAdd){
        return(
          <UncontrolledAlert color="success">
              Successfully added the appointment
          </UncontrolledAlert>
        )
      }
      else return null
    }
	
	addAppointment(){
	
		var appointmentToAdd = {
		
			date: this.state.date,
			time: this.state.time,
			notes: this.state.notes,
			id: this.state.id,
			seenBy: '',
			createdBy: null,
			checkedIn: false,
			late: false,
			__v: 0
		}
		fetch('http://127.0.0.1:5000/api/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointmentToAdd)
        })
		.then(response => response.json())
        .then(responseData => {
            if(responseData.success){
              this.setState({
                successAdd: true
              })
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
		
			<div class="landingPage" style={{overflow: "hidden"}}>
                <ToolBar home={true}/>
				<Col sm={4} className="mb-4">
					<AppointmentList appointments={this.state.appointments}/>
				</Col>
				<Form>
					<Row>
						<Col sm={4} className="mb-4">
							<FormGroup>
								<Label>Date</Label>
								<Input type="date" name="date" placeholder="date placeholder" onChange={(e) => this.getInfo(e, "date")}/>
							</FormGroup>
						</Col>
						<Col sm={4} className="mb-4">
							<FormGroup>
								<Label>Time</Label>
								<Input type="time" name="time" placeholder="time placeholder" onChange={(e) => this.getInfo(e, "time")}/>
							</FormGroup>
						</Col>
					</Row>
					<FormGroup>
						<Label>Notes</Label>
						<Input type="textarea" name="notes" onChange={(e) => this.getInfo(e, "notes")}/>
					</FormGroup>
					<Button color="secondary" onClick={() => this.addAppointment()}>Submit</Button>
				</Form>
			</div>
		);
	}
}

export default Appointments;