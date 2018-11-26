import React, {Fragment} from 'react';
import {Col} from 'reactstrap';
import PropTypes from 'prop-types';
import Patient from './Patient';

const PatientList = (props) => {
    return(
        <Fragment>
            {props.patients.map((patient, index) =>
                <Col key={index} sm="4">
                    <Patient
                        username={patient.username}
                        id={patient.id}
                        fname={patient.fname}
                        lname={patient.lname}
                    />
                </Col>
            )}
        </Fragment>
    );
}

PatientList.proptypes = {
    patients: PropTypes.array.isRequired
}

export default PatientList;
