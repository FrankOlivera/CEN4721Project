import axios from 'axios';

//Axios is a promise based HTTP client for the browser and Node. js. 
//Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. 
//It can be used in plain JavaScript or with a library such as Vue or React.

//https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
//Understanding HTTP requests (get,put,post) and status codes meaning

//Initilizes type of Requst(get,put,post,delete,etc.)

const eventUrl = 'http://localhost:5000/events';

export const fetchEvents = () => axios.post(eventUrl + "/get");
export const createEvent = (newEvent) => axios.post(eventUrl, newEvent);
export const updateEvent = (id, updatedEvent) => axios.patch(`${eventUrl}/${id}`, updatedEvent);
export const deleteEvent = (id) => axios.delete(`${eventUrl}/${id}`);

