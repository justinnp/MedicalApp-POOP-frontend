import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardTitle, CardText, Progress, Button, Row, Col, ListGroup, ListGroupItem, Popover, PopoverHeader, PopoverBody} from 'reactstrap';



const Appointment = (props) => {
	
	this.setState({popoverOpen: false});
	
	var deletion = props.id
	function deleteAppointment(){
        fetch('http://127.0.0.1:5000/api/appointments/'+deletion,{
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
	
	function toggle() {
	
		this.setState({ popoverOpen: !this.state.popoverOpen });
	}
	
	return (
	
		<Row>
			<Col sm="3">
				<ListGroup>
					<ListGroupItem>{props.date}</ListGroupItem>
				</ListGroup>
			</Col>
			<Col sm="3">
				<ListGroup>
					<ListGroupItem>{props.time}</ListGroupItem>
				</ListGroup>
			</Col>
			<Col sm="3">
				<Button id="Notes" color="secondary" onClick={this.toggle}>Notes</Button>
				<Popover placement="bottom" isOpen={this.state.popoverOpen} target="Notes" toggle={this.toggle}>
					<PopoverHeader>Notes</PopoverHeader>
					<PopoverBody>{props.notes}</PopoverBody>
				</Popover>
			</Col>
			<Col sm="3">
				<Button color="secondary" onClick={() => deleteAppointment()}>Delete</Button>
			</Col>
		</Row>
	);
}

Appointment.proptypes = {
    date: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
}
export default Appointment;