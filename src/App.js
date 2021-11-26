import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import './App.css';
import AdmissionInfo from "./components/AdmissionInfo/AdmissionInfo";
import BridgeMain from "./components/BridgePage/BridgePageMain/BridgeMain";
import LeadMain from './components/LeadPage/LeadMain/LeadMain'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/admissionOffer">
            <BridgeMain />
          </Route>

          <Route path="/admissionInfo">
            <AdmissionInfo />
          </Route>
          
          <Route exact path="/">
            <LeadMain />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
