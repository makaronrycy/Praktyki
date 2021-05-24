
import React, { Component } from "react";
import './App.css';
import FetchGuitars from "./component/FetchGuitars";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render (){
    return(
    <Router>
    <div className="App">
      <h1>Fetching from API</h1>
      <Route path="/guitars" component={FetchGuitars}/>
      
    </div>
    </Router>
    );
  }
}

export default App;
