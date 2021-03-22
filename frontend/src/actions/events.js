import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, FETCH_DATE_EVENTS } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getEvents = () => async (dispatch) => {
    try {
        let { data } = await api.fetchEvents();

        dispatch({ type: FETCH_DATE_EVENTS, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createEvent = (event) => async (dispatch) => {
    try {
        const { data } = await api.createEvent(event);

        dispatch({ type: CREATE_EVENT, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateEvent = (id, event) => async (dispatch) => {
    try {
        const { data } = await api.updateEvent(id, event);

        dispatch({ type: UPDATE_EVENT, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};


export const deleteEvent = (id) => async (dispatch) => {
    try {
        await api.deleteEvent(id);

        dispatch({ type: DELETE_EVENT, payload: id });
    } catch (error) {
        console.log(error.message);
    }
};