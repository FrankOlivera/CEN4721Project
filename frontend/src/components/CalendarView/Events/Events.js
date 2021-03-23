import React from 'react';
import { Grid, CircularProgress,Button, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Event from './Event/Event';

const Events = ({ setCurrentId, date, curretId, setOpenSubmit, numberToMonth }) => {
    const events = useSelector((state) => {
        let events = [];
        const dateChecker = numberToMonth(date.getMonth()) + date.getDate() + date.getFullYear();
        state.events.map((event) => { if (event.date === dateChecker) { events.push(event) } });
        return events;
    });
    
    const columns = [
        { field: 'Title', headerName: 'Title', width: 70 },
        { field: 'Description', headerName: 'Description', width: 130 },
        { field: 'StartTime', headerName: 'EndTime', width: 130 },
    ];

    return (
        <>
            {!events.length ? <Typography>No Events For This Day</Typography> : (
                <>
                    {events.map((event) => (
                            <Event event={event} curretId={curretId} setCurrentId={setCurrentId} setOpenSubmit={setOpenSubmit }/>  
                    ))}
                </>
            )}

        </>
    );
};

export default Events;