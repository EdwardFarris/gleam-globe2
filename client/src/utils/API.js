import axios from 'axios';

export default {
<<<<<<< HEAD
    // Gets all books
    // getBooks: function() {
    //   return axios.get("/api/books");
    // },
    // // Gets the book with the given id
    // getBook: function(id) {
    //   return axios.get("/api/books/" + id);
    // },
    // // Deletes the book with the given id
    // deleteBook: function(id) {
    //   return axios.delete("/api/books/" + id);
    // },
    // Saves a book to the database
    saveEvent: function(eventData) {
      console.log("API.js", eventData);
      return axios.post("/api/events", eventData);
    }
  };
  
=======
  // Gets all events
  getEvents: function () {
    return axios.get("/api/events");
  },
  // Gets the event with the given id
  getEvent: function (id) {
    return axios.get("/api/event/" + id);
  },
  // Deletes the event with the given id
  deleteEvent: function (id) {
    return axios.delete("/api/events/" + id);
  },
  // Saves a event to the database
  saveEvent: function (eventData) {
    console.log("API.js", eventData);
    return axios.post("/api/events", eventData);
  },
  //API calls from Justin for sign-in
  addNewUser: function (user) {
    return axios.post("/api/users/", user);
  },
  getAllUsers: function (user) {
    return axios.get("/api/users/?" + Object.keys(user).map(
      (key) => {
        return key + "=" + user[key];
      }
    ).join("&"));
  }
};
  
>>>>>>> 02d2e16a07eb9aca8edec8f913274641d925a3fb
