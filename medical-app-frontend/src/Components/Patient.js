import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardTitle, CardText, Progress,Button,Row} from 'reactstrap';
import '../Patient.css';

function percentageColor(newColor){
    if(newColor < 40) return 'success';
    else if(newColor >= 40 && newColor < 90) return 'warning';
    else return 'danger';
}

const Patient = (props) => {
    var deletion = props.id;
    var url = 'https://www.google.com';
    function deletePatient(){
        fetch('http://127.0.0.1:5000/api/patients/'+deletion,{
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

    return(
        <Card body className="mx-2 my-3">
            <CardTitle>
                <div className="d-flex">
                    <div class="blink_me">{props.fname}</div> &nbsp;
                    <div class="blink_me_again">{props.lname}</div>
                    <div className="ml-auto">
                        <a href={url} style={{textDecoration:"none", color:"white"}}>
                            <Button color="primary" size="sm">
                                View Info
                            </Button>
                        </a>
                    </div>
                    <div className="ml-auto">
                        <Button outline color="warning" onClick={() => deletePatient()}>Delete</Button>
                    </div>
                </div>
            </CardTitle>
        </Card>
    );
}

Patient.proptypes = {
    username: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    fname: PropTypes.string.isRequired,
    lname: PropTypes.string.isRequired,
}
export default Patient;
