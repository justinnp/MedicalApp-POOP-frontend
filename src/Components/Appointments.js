import React, {Component} from 'react';
import {Navbar, Row, Col, UncontrolledAlert, Form, FormGroup, Input, InputGroup, InputGroupAddon, Button, ListGroup, ListGroupItem, Label} from 'reactstrap';
import ToolBar from './ToolBar';
import AppointmentList from './AppointmentList';
import '../landingpage.css';


const url = 'https://med-data-92861.herokuapp.com/api/appointments'


class Appointments extends Component {
	constructor(props){
		super(props)
		this.state ={

			appointments: [],
			id: null
		}
	}
/*
	componentWillMount(){

		let id = this.props.match.params.id;
        fetch(url+'/search'+id)
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
*/
	componentDidMount() {
      this.grabData();
    }

	grabData(){

		let id = this.props.match.params.id;
        fetch(url+'/search'+id)
        .then(response => response.json())
        .then(responseData =>{
            const tmpAppointments = [];
            for(var key in responseData){

                const appointment = {
                    date: responseData[key].date,
					time: responseData[key].time,
                    seenBy: responseData[key].seenBy,
					createdBy: responseData[key].createdBy,
					notes: responseData[key].notes,
                    checkedIn: responseData[key].checkedIn,
                    late: responseData[key].late,
                }
                tmpAppointments.push(appointment);
            }

            this.setState({
                appointments: tmpAppointments,
				id: id
            })

        })
        .catch(error => {
            console.log('Error fetching and parsing data.', error);
        });
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
			patient: this.state.id,
			date: this.state.date,
			time: this.state.time,
			notes: this.state.notes,
			seenBy: '',
			createdBy: null,
			checkedIn: false,
			late: false,
			__v: 0
		}
		fetch('https://med-data-92861.herokuapp.com/api/appointments', {
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
				<Row sm={4} className="mb-4">
					<AppointmentList appointments={this.state.appointments}/>
				</Row><br/>
				<Form>
					<Row>
						<Col sm={4} className="mb-4">
							<FormGroup>
								<Label>Date</Label>
								<Input type="date" name="date" placeholder="date placeholder" onChange={(e) => this.getInfo(e, "date")}/>
							</FormGroup>
						</Col>
					</Row>
					<FormGroup>
						<Label>Time</Label>
						<Input type="text" name="notes" onChange={(e) => this.getInfo(e, "notes")}/>
					</FormGroup>
					<Button color="secondary" onClick={() => this.addAppointment()}>Submit</Button>
				</Form>
			</div>
		);
	}
}

export default Appointments;
