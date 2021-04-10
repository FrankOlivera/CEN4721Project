import React from 'react';
import { Card, Typography,Button } from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import { deleteEvent } from '../../../../actions/events'
import { Delete, UpdateRounded } from '@material-ui/icons';
import useStyles from './styles.js';


const Event = ({ event, setCurrentId, currentId, setOpenSubmit }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
            <Card className={ classes.card }>
                <Typography className={classes.title} variant="h6"><b>{event.title}</b></Typography>
                <Typography className={classes.time} variant="h6">{event.startTime}{" - "}{event.endTime}</Typography>
                {(event.description === "") ? (<></>) : (<Typography className={classes.description2} > {"Description: "} {event.description}</Typography>)}
                <Button variant="contained" className={classes.selectButton} color="primary" size="small" startIcon={<UpdateRounded />} onClick={() => { setCurrentId(event._id); setOpenSubmit(true); }}>Select</Button>
                <Button variant="contained" color="secondary" className={classes.deleteButton} size="small" startIcon={<Delete />} onClick={() => { if (currentId === event._id) { alert("Please Finish Updating before Deleting") } else { dispatch(deleteEvent(event._id)) } }}>Delete</Button>
            </Card>
    );
};

export default Event;