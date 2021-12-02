import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import './App.css';
import AdmissionEligibility from "./components/AdmissionInfo/AdmissionEligibility/AdmissionEligibility";
import AdmissionOverview from "./components/AdmissionInfo/AdmissionOverview/AdmissionOverview";
import OnlineAdmission from "./components/AdmissionInfo/OnlineAdmission/OnlineAdmission";
import Scholarships from "./components/AdmissionInfo/Scholarships/Scholarships";
import TutionFees from "./components/AdmissionInfo/TutionFees/TutionFees";
import Payments from "./components/AdmissionInfo/Payments/Payments";
import UnderGraduate from "./components/AdmissionInfo/UnderGraduate/UnderGraduate";
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
            <AdmissionOverview />
          </Route>
          
          <Route path="/underGraduate">
            <UnderGraduate />
          </Route>

          <Route path="/tutionFees">
            <TutionFees />
          </Route>

          <Route path="/scholarships">
            <Scholarships />
          </Route>

          <Route path="/onlineAdmission">
            <OnlineAdmission />
          </Route>

          <Route path="/AdmissionEligibility">
            <AdmissionEligibility />
          </Route>

          <Route path="/payments">
            <Payments />
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
