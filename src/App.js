import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import './App.css';
import BridgeMain from "./components/BridgePage/BridgePageMain/BridgeMain";
import LeadMain from './components/LeadPage/LeadMain/LeadMain'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/admissionOffer">
            <LeadMain />
          </Route>
          <Route path="/home">
            <BridgeMain />
          </Route>
          <Route exact path="/">
            <BridgeMain />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
