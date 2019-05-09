import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Mainpage from './pages/Mainpage/main';
import Volunteer from './pages/volunteer/volunteer';
import Contact from './pages/contact/contact';
import Wastereduction from './pages/wastereduction/waste';
import Newevent from './components/Newevent/index';
import "./App.css";
import Eventmap from './pages/Map/eventmap';
import CreateEvent from './pages/createEvent/EventFormContainer';
import Aboutus from './pages/about us/aboutus';
<<<<<<< HEAD
import SignIn from './pages/sign-up/signInForm';
import SignUp from './pages/sign-up/signUpForm';
=======
import SignUp from './pages/sign-in/signUpForm';
import SignIn from './pages/sign-in/signInForm';
>>>>>>> 98fb53c6385044957669c33c7e5c2426e229a67d



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
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/wastereduction" component={Wastereduction} />
                <Route exact path="/aboutus" component={Aboutus} />
                <Route exact path="/volunteer" component={Volunteer} />
                <Route exact path="/map" component={Eventmap} />
                <Route exact path="/events/:id" component={Newevent} />
                <Route exact path="/createevent" component={CreateEvent} />
<<<<<<< HEAD
                <Route exact path="/aboutus" component={Aboutus} />
                <Route exact path="/login" component={SignIn} />
                <Route exact path="/login" component={SignUp} />
=======
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/signin" component={SignIn} />
               

>>>>>>> 98fb53c6385044957669c33c7e5c2426e229a67d
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

