import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";

class Newevent extends Component {
  state = {
    event: {}
  };
  // When this component mounts, grab the event with the _id of this.props.match.params.id
  // e.g. localhost:3000/events/599dcb67f0f16317844583fc
  // componentDidMount() {
  //   API.getEvent(this.props.match.params.id)
  //     .then(res => this.setState({ event: res.data }))
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
            <Jumbotron>
              <ul>
                <li>{this.state.event.title}</li> 
                <li> {this.state.event.date}</li>
                <li> {this.state.event.start_time}</li>
                <li> {this.state.event.street_address}</li>
            </ul>
            </Jumbotron>
    );
  }
}

export default Newevent;