import React, { Component } from 'react';
import Home from "./Pages/Home";
import About from "./Pages/About";
import SailingSchool from "./Pages/SailingSchool";
import Register from "./Pages/Register";
import Regate from "./Pages/Regate";
import Login from "./Pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';




class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <Router>
        <Header/>
        
        <Switch>
        <Route exact path= '/' component = {Home}></Route>
        <Route  path= '/about' component = {About}></Route>
        <Route  path= '/login' component = {Login}></Route>
        <Route  path= '/regate' component = {Regate}></Route>
        <Route  path= '/register' component = {Register}></Route>
        <Route  path= '/sailingschool' component = {SailingSchool}></Route>
        </Switch>
        <Footer/>
      
      </Router>
    );
  }
}

export default App;