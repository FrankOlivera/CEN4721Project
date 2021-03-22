import express from 'express';

import { getEvents,createEvent,updateEvent,deleteEvent } from '../controllers/events.js';

//https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
//Understanding HTTP requests (get,put,post) and status codes meaning

//THIS FILE INITIALIZES ROUTES DEFINED in controllers/posts.js 
const router = express.Router();

router.post('/get', getEvents);
router.post('/', createEvent);
router.patch('/:id', updateEvent);
router.delete('/:id', deleteEvent);

export default router;