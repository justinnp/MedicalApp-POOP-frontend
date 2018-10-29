import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing';
import Login from './Components/Login';
import Register from './Components/Register';
import RegisterOption from './Components/RegisterOption';
import Home from './Components/Home';

const App = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={RegisterOption} />
          <Route path="/register_doctor" render={(props) => <Register isPatient={false} />} />
          <Route path="/register_patient" render={(props) => <Register isPatient={true} />} />
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    );
}

export default App;
