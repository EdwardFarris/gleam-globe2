
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import Mainpage from './pages/Mainpage/main';
import Volunteer from './pages/volunteer/volunteer';
import Contact from './pages/contact/contact';
import Wastereduction from './pages/wastereduction/waste';
import Newevent from './components/Newevent/index';
// import Calendar from "./components/calendar/Calendar";
import "./App.css";
// import wastereduction from "./components/images/earthmonth.png";
import Eventmap from './pages/Map/eventmap';
import CreateEvent from './pages/createEvent/EventFormContainer';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            
            <div className="imagecard col-md-8 mx-auto">
            
            </div>
            
            <div className="bg-dark text-white">
              <Switch>
                <Route exact path="/" component={Mainpage} />
                <Route exact path="/calendar" component={Volunteer} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/map" component={Eventmap} />
                <Route exact path="/wastereduction" component={Wastereduction} />
                <Route exact path="/events/:id" component={Newevent} />
                <Route exact path="/createevent" component={CreateEvent} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

