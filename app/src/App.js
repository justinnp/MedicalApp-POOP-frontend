import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing';
import Login from './Components/Login';
import LoginOption from './Components/LoginOption'
import Register from './Components/Register';
import RegisterOption from './Components/RegisterOption';
import Home from './Components/Home';
import ViewPatients from './Components/ViewPatients';
import ViewPrescriptions from './Components/ViewPrescriptions';
import ViewDoctors from './Components/ViewDoctors';
import AddPrescription from './Components/AddPrescription';
import ViewMedicalHistory from './Components/ViewMedicalHistory';
import AddMedicalHistory from './Components/AddMedicalHistory';
import Appointments from './Components/Appointments';
import ViewInsurance from './Components/ViewInsurance';
import AddInsurance from './Components/AddInsurance';
import UpdateInsurance from './Components/UpdateInsurance';
import UpdateMedicalHistory from './Components/UpdateMedicalHistory';




const App = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={LoginOption} />
          <Route path="/login_doctor" render={(props) => <Login doctor={true}/>} />
          <Route path="/login_admin" render={(props) => <Login doctor={false}/>} />
          <Route path="/register" component={RegisterOption} />
          <Route path="/register_doctor" component={Register} />
          <Route path="/register_admin" render={(props) => <Register isAdmin={true} />} />
          <Route path="/home/:id" component={Home} />
          <Route exact path="/view_patients/" component={ViewPatients} />
          <Route path="/view_prescriptions/:id" component={ViewPrescriptions} />
          <Route path="/view_doctors" component={ViewDoctors} />
          <Route path="/add_prescription/:id" component={AddPrescription} />
          <Route path="/view_medicalhistory/:id" component={ViewMedicalHistory} />
          <Route path="/add_medicalhistory/:id" component={AddMedicalHistory} />
		      <Route path="/appointments/:id" component={Appointments} />
          <Route path="/view_insurance/:id" component={ViewInsurance} />
          <Route path="/add_insurance/:id" component={AddInsurance} />
          <Route path="/update_insurance/:id" component={UpdateInsurance} />
          <Route path="/update_medicalhistory/:id" component={UpdateMedicalHistory} />
        </Switch>
      </BrowserRouter>
    );
}

export default App;
