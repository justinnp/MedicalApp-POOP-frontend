import React, {Fragment} from 'react';
import {Col} from 'reactstrap';
import PropTypes from 'prop-types';
import Appointment from './Appointment';

const AppointmentList = (props) => {
	return(
		<Fragment>
			{props.appointments.map((appointment, index) =>
                <Col key={index} sm="4">
                    <Appointment
                        date={appointment.date}
						id = {appointment.id}
                        time={appointment.time}
                        notes={appointment.notes}
                    />
                </Col>
            )}
		</Fragment>
	);
}

AppointmentList.proptypes = {
    appointments: PropTypes.array.isRequired
}

export default AppointmentList;