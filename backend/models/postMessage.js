import mongoose from 'mongoose';


//THIS FILE DEFINES THE STRUCTURE OF Json files to be sent to database
//In controller/posts.js used when request made
const postSchema = mongoose.Schema({
    message: String,
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;