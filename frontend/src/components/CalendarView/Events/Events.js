import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Event from './Event/Event';

const Events = ({ setCurrentId }) => {
    const events = useSelector((state) => state.events);

    return (
        !events.length ? <CircularProgress /> : (
            <Grid  container alignItems="stretch" spacing={3}>
                {events.map((event) => (
                    <Grid key={event._id} item xs={12} sm={6} md={6}>
                        <Event event={event} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
};

export default Events;