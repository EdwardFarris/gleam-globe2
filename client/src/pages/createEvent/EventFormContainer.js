import React, { Component } from 'react';

/* Import Components */
import { Link } from "react-router-dom";
import Button from '../../components/buttons/Button';
import './EventFormContainer.css';
import API from '../../utils/API';
// import Jumbotron from '../../components/Jumbotron/index';
import { List, ListItem } from '../../components/List/index';
import Card from '../../components/card/card';
import Input from "../../components/EventInput/Input";
import DeleteBtn from "../../components/DeleteBtn/index";


class EventFormContainer extends Component {
  state = {
    events: [],
    title: "",
    date: "",
    start_time: "",
    street_address: ""
  };

  componentDidMount() {
    this.loadEvents();
  }

  loadEvents = () => {
    API.getEvents()
      .then(res =>
        this.setState({ events: res.data, title: "", date: "", start_time: "", street_address: "" })
      )
      .catch(err => console.log(err));
  };

  deleteEvent = id => {
    API.deleteEvent(id)
      .then(res => this.loadEvents())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.date && this.state.start_time && this.state.street_address) {
      API.saveEvent({
        title: this.state.title,
        date: this.state.date,
        start_time: this.state.start_time,
        street_address: this.state.street_address
      })
        .then(res => this.loadEvents())
        .catch(err => console.log(err));
    }
  };

  handleClearForm = event => {
    event.preventDefault();
    this.setState({
      events: {
        title: "",
        date: "",
        start_time: "",
        street_address: ""
      }
    });
  };

  render() {
    return (
      <div id="backgroundimage1" className="overlay volunteerImg">

        <h2>Register to Volunteer and help our community!</h2>
        <Card cardImage="volunteerImg">

          <form className="container-fluid" onSubmit={this.handleFormSubmit}>

            <Input inputtype={'text'}
              title={'Event Title'}
              name={'title'}
              value={this.state.events.title}
              placeholder={'Name of Event (Required)'}
              onChange={this.handleInputChange}
            />

            <Input inputtype={'text'}
              title={'Event Date'}
              name={'date'}
              value={this.state.events.date}
              placeholder={'example: 11/17/19 (Required)'}
              onChange={this.handleInputChange}
            />

            <Input inputtype={'text'}
              name={'start_time'}
              title={'Time of Event'}
              value={this.state.events.start_time}
              placeholder={'example: 9:00am (Required)'}
              onChange={this.handleInputChange}
            />

            <Input inputtype={'text'}
              name={'street_address'}
              title={'Location of Event'}
              value={this.state.events.street_address}
              placeholder={'example: 1365 W Warner Rd (Required)'}
              onChange={this.handleInputChange}
            />

            <Button
              onClick={this.handleFormSubmit}
              type={'primary'}
              title={'Create Event'}
              style={buttonStyle}
            />

            <Button
              onClick={this.handleClearForm}
              type={'secondary'}
              title={'Clear Form'}
              style={buttonStyle}
            />

          </form>
          
          <div>
          {this.state.events.length ? (
            <List>
              {this.state.events.map(event => (
                <ListItem key={event._id}>
                  <Link to={"/events/" + event._id}>
                    <ul>
                      <li><strong>Event Title: {event.title}</strong></li>
                    <li>Event Date: {event.date}</li>
                    <li>Time of Event: {event.start_time}</li>
                    <li>Location of Event: {event.street_address}</li>
                    </ul>
                  </Link>
                  <DeleteBtn onClick={() => this.deleteEvent(event._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
            </div>
        </Card>
      </div>
    );
  }
}


const buttonStyle = {
  margin: '10px 10px 10px 10px'
}

export default EventFormContainer;