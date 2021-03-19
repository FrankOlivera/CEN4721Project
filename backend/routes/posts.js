import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js';

//https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
//Understanding HTTP requests (get,put,post) and status codes meaning

//THIS FILE INITIALIZES ROUTES DEFINED in controllers/posts.js 
const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);


export default router;