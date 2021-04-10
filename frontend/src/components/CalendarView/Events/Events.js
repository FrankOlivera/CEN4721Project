import React from 'react';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Event from './Event/Event';

const Events = ({ setCurrentId, date, curretId, setOpenSubmit, numberToMonth }) => {
    const events = useSelector((state) => {
        let events = [];
        const dateChecker = numberToMonth(date.getMonth()) + date.getDate() + date.getFullYear();
        state.events.forEach((event) => { if (event.date === dateChecker) { events.push(event) } });
        return events;
    });
    

    return (
        <>
            {!events.length ? <Typography>No Events For This Day</Typography> : (
                <>
                    {events.map((event) => (
                        <Event key={event._id } event={event} curretId={curretId} setCurrentId={setCurrentId} setOpenSubmit={setOpenSubmit }/>  
                    ))}
                </>
            )}

        </>
    );
};

export default Events;