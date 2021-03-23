import React from 'react';
import { Grid, CircularProgress,Button, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Event from './Event/Event';

const Events = ({ setCurrentId, date }) => {
    const events = useSelector((state) => {
        let events = [];
        const dateChecker = numberToMonth(date.getMonth()) + date.getDate() + date.getFullYear();
        state.events.map((event) => { if (event.date === dateChecker) { events.push(event) } });
        console.log(events);
        return events;
    });
    function numberToMonth(number) {
        switch (number) {
            case 0:
                return "Janurary";
            case 1:
                return "February";
            case 2:
                return 'March';
            case 3:
                return 'April';
            case 4:
                return 'May';
            case 5:
                return 'June';
            case 6:
                return 'July';
            case 7:
                return 'August';
            case 8:
                return 'September';
            case 9:
                return 'October';
            case 10:
                return 'November';
            case 11:
                return 'Decemeber';
            default:
                return "?";
        }
    }
    
    const h = () => {
        console.log(events);
    }

    return (
        <>
            {!events.length ? <Typography>No Events For This Day</Typography> : (
                <Grid container alignItems="stretch" spacing={3}>
                    {events.map((event) => (
                        <Grid key={event._id} item xs={12} sm={6} md={6}>
                            <Event event={event} setCurrentId={setCurrentId} />
                        </Grid>
                    ))}
                </Grid>
            )}

        </>
    );
};

export default Events;