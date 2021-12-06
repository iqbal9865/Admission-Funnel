import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import './App.css';
import { createContext, useState } from 'react';
import AdmissionEligibility from "./components/AdmissionInfo/AdmissionEligibility/AdmissionEligibility";
import AdmissionOverview from "./components/AdmissionInfo/AdmissionOverview/AdmissionOverview";
import OnlineAdmission from "./components/AdmissionInfo/OnlineAdmission/OnlineAdmission";
import Scholarships from "./components/AdmissionInfo/Scholarships/Scholarships";
import TutionFees from "./components/AdmissionInfo/TutionFees/TutionFees";
import Payments from "./components/AdmissionInfo/Payments/Payments";
import UnderGraduate from "./components/AdmissionInfo/UnderGraduate/UnderGraduate";
import BridgeMain from "./components/BridgePage/BridgePageMain/BridgeMain";
import LeadMain from './components/LeadPage/LeadMain/LeadMain'
import Login from "./components/Login/Login"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Admin/Dashboard";
import Program from "./components/AdmissionInfo/UnderGraduate/Program";
import NotFound from "./components/NotFound/NotFound"
import AddCampaign from "./components/Admin/AddCampaign/AddCampaign";
import ManageArticle from "./components/Admin/ManageArticle/ManageArticle";
import ManageEvents from "./components/Admin/ManageEvents/ManageEvents";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import Subscribers from "./components/Admin/Subscribers/Subscribers";
import AddWebinarVideos from "./components/Admin/AddWebinarVideos/AddWebinarVideos";
export const UserContext = createContext();

function App() {
  
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
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

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/department/:dept">
            <Program />
          </Route>

          <Route path="/admin">
            <MakeAdmin />
          </Route>

          <Route path="/manageCampaign">
            <AddCampaign />
          </Route>
          <Route path="/manageArticle">
            <ManageArticle />
          </Route>
          <Route path="/manageEvents">
            <ManageEvents />
          </Route>
          <Route path="/subscribers">
            <Subscribers />
          </Route>
          <Route path="/addWebinarVideos">
            <AddWebinarVideos />
          </Route>
          <Route exact path="/">
            <LeadMain />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>
      </UserContext.Provider>
      </div>
  );
}

export default App;
