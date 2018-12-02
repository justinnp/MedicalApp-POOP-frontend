import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing';
import Login from './Components/Login';
import Register from './Components/Register';
import RegisterOption from './Components/RegisterOption';
import Home from './Components/Home';
import ViewPatients from './Components/ViewPatients';
import ViewPrescriptions from './Components/ViewPrescriptions';
import AddPrescription from './Components/AddPrescription';
import ViewMedicalHistory from './Components/ViewMedicalHistory';



const App = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={RegisterOption} />
          <Route path="/register_doctor" render={(props) => <Register isPatient={false} />} />
          <Route path="/register_patient" render={(props) => <Register isPatient={true} />} />
          <Route path="/home/:id" component={Home} />
          <Route exact path="/view_patients/" component={ViewPatients} />
          <Route path="/view_prescriptions/:id" component={ViewPrescriptions} />
          <Route path="/add_prescription/:id" component={AddPrescription} />
          <Route path="/view_medicalhistory/:id" component={ViewMedicalHistory} />
        </Switch>
      </BrowserRouter>
    );
}

export default App;
