import express from 'express';
import mongoose from 'mongoose';

import EventMessage from '../models/eventMessage.js';

const router = express.Router();


//THIS FILE DEFINES REQUESTS
export const getEvents = async (req, res) => {
    try {
        const events = await EventMessage.find();

        res.status(200).json(events);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getEvent = async (req, res) => {
    const { id } = req.params;

    try {
        const event = await EventMessage.findById(id);

        res.status(200).json(event);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createEvent = async (req, res) => {
    const { title, date, description, startTime, endTime } = req.body;

    const newEvent = new EventMessage({ title,date,description,startTime,endTime })

    try {
        await newEvent.save();

        res.status(201).json(newEvent);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateEvent = async (req, res) => {
    const { id } = req.params;
    const { title, date, description, startTime, endTime } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No event with id: ${id}`);

    const updatedEvent = { title, date, description, startTime, endTime, _id: id };

    await EventMessage.findByIdAndUpdate(id, updatedEvent, { new: true });

    res.json(updatedEvent);
}

export const deleteEvent = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No event with id: ${id}`);

    await EventMessage.findByIdAndRemove(id);

    res.json({ message: "Event deleted successfully." });
}



export default router;