
import React, { Component } from "react";
import './App.css';
import HomePage from "./component/Homepage";
import FetchCars from "./component/Cars";
import FetchSoda from "./component/Soda";
import FetchGuitar from "./component/Guitars";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {

  render (){
    return(
    <Router>
    <div className="App">
     
      <header><a href="/"><h1>Fetching from API</h1></a></header>
      <nav>
        <div><a href="/guitar">Guitars</a></div>
        <div><a href="/cars">Cars</a></div>
        <div><a href="/soda">Soda</a></div>
      </nav>
      <div>
        <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/cars" component={FetchCars}/>
        <Route path="/guitar" component={FetchGuitar}/>
        <Route path="/soda" component={FetchSoda}/>
        </Switch>
        
      </div>
    </div>
    </Router>
    );
  }
}

export default App;
