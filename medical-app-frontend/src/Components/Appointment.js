import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardTitle, CardText, Progress, Button, Row, Col, ListGroup, ListGroupItem, Popover, PopoverHeader, PopoverBody} from 'reactstrap';



const Appointment = (props) => {

	var deletion = props.id
	function deleteAppointment(){
        fetch('https://med-data-92861.herokuapp.com/api/appointments/'+deletion,{
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
			toggle = !toggle;
	}

	return(

		<Card body className="mx-2 my-3">
				<CardTitle>
						<div className="d-flex">
								<div class="blink_me">Date: {(props.date).substring(0,10)}</div> &nbsp;
								<div class="blink_me_again">Time: {props.notes}</div> <br/>
								<div className="ml-auto">
										<Button color="secondary" onClick={() => deleteAppointment()}>Delete</Button>
								</div>
						</div>
				</CardTitle>
		</Card>
	);
}

Appointment.proptypes = {
    date: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
}
export default Appointment;
