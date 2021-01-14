import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar  from './Components/Navbar'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Calender from './Components/Calender/Calender'
import Form from './Components/Form/Form';



const App = () => {
  return (
    <Router>
      <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/calender">
          <Calender></Calender>
          </Route>
          <Route path="/sign-up">
          <Form/>
          </Route>
        </Switch>
    </Router>
  );
};

export default App;