import React, { Component } from 'react';

/* Import Components */
import Input from '../EventInput/Input';
import Button from '../buttons/Button';
import "./EventFormContainer.css";
import API from "../../utils/API";

class EventFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newEvent: [],
      date: "",
      start_time: "",
      street_address: ""
    };

    // componentDidMount() {
    //   this.loadEvents();
    // };

    this.loadEvents = () => {
      API.getEvents()
        .then(res =>
          this.setState({ events: res.data, date: "", start_time: "", street_address: "" })
        )
        .catch(err => console.log(err));
    };


    
    // this.handleDate = this.handleDate.bind(this);
    // this.handleStartTime = this.handleStartTime.bind(this);
    // this.handleStreetAddress = this.handleStreetAddress.bind(this);
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.handleClearForm = this.handleClearForm.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);


    /* This lifecycle hook gets executed when the component mounts */

    // handleDate(e) {
    //   let value = e.target.value;
    //   this.setState(prevState => ({
    //     newEvent:
    //     {
    //       ...prevState.newEvent, date: value
    //     }
    //   }), () => console.log(this.state.newEvent))
    // };

    // handleStartTime(e) {
    //   let value = e.target.value;
    //   this.setState(prevState => ({
    //     newEvent:
    //     {
    //       ...prevState.newEvent, start_time: value
    //     }
    //   }), () => console.log(this.state.newEvent))
    // };

    // handleStreetAddress(e) {
    //   let value = e.target.value;
    //   this.setState(prevState => ({
    //     newEvent:
    //     {
    //       ...prevState.newEvent, street_address: value
    //     }
    //   }), () => console.log(this.state.newEvent))
    // };
  }
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.date && this.state.start_time && this.state.street_address) {
        API.saveEvent({
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
        newEvent: {
          date: "",
          start_time: "",
          street_address: ""
        }
      });
    };

    render() {
      return (

        <form className="container-fluid" onSubmit={this.handleFormSubmit}>

          <Input inputtype={'text'}
            title={'Event Date'}
            name={'date'}
            value={this.state.newEvent.date}
            placeholder={'Enter date of event: day/month/year'}
            handlechange={this.handleDate}
            onChange={this.handleInputChange}

          /> 

          <Input inputtype={'text'}
            name={'start_time'}
            title={'Time of Event'}
            value={this.state.newEvent.start_time}
            placeholder={'Enter Time of Event:(ex) 9:00am'}
            onChange={this.handleInputChange}
            handlechange={this.handleStartTime} /> {/* time of event */}

          <Input inputtype={'text'}
            name={'street_address'}
            title={'Location of Event'}
            value={this.state.newEvent.street_address}
            placeholder={'Enter Street Address:(ex)1365 W Warner Rd'}
            onChange={this.handleInputChange}
            handlechange={this.handleStreetAddress} /> {/* time of event */}

          <Button
            action={this.handleFormSubmit}
            type={'primary'}
            title={'Create Event'}
            style={buttonStyle}
          /> 

          <Button
            action={this.handleClearForm}
            type={'secondary'}
            title={'Clear Form'}
            style={buttonStyle}
          /> 

        </form>
        
      );
    }
  }


  const buttonStyle = {
    margin: '10px 10px 10px 10px'
  }

  export default EventFormContainer;