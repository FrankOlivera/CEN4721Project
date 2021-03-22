import mongoose from 'mongoose';


//THIS FILE DEFINES THE STRUCTURE OF Json files to be sent to database
//In controller/posts.js used when request made
const eventSchema = mongoose.Schema({
    title: String,
    date: String,
    description: String,
    startTime: String,
    endTime: String,
})

var EventMessage = mongoose.model('EventMessage', eventSchema);

export default EventMessage;