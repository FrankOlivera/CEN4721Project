import { useState, useEffect } from 'react';
import { Paper, TextField, Grid, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import TimeMenu from './TimeMenu/TimeMenu';
import DateSelector from './DateSelector/DateSelector'

import { createEvent, updateEvent } from '../../../actions/events';

const SubmitForm = ({ currentId, setCurrentId }) => {
    const [eventData, setEventData] = useState({ title: '', date: '', description: '', startTime: '',endTime: '' });
    const event = useSelector((state) => (currentId ? state.events.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if (event) setEventData(event);
    }, [event]);

    const clear = () => {
        document.getElementById("SubmitFormTitle").value = "";
        document.getElementById("SubmitFormDescription").value = "";
        console.log(document.getElementById("DateSelector"));
        setCurrentId(0);
        setEventData({ title: '',
            date: '',
            description: '',
            startTime: '',
            endTime: '' });
    };

    const handleSubmit = async () => {
        if (currentId === 0) {
            dispatch(createEvent(eventData));
            clear();
        } else {
            dispatch(updateEvent(currentId, eventData));
            clear();
        }
    };

    const callbackFunction = (time) => {
        setEventData({ ...eventData, startTime: time });
    }
    const callbackFunction2 = (time) => {
        setEventData({ ...eventData, endTime: time });
    }
    const callbackFunction3 = (month, day, year) => {
        const date = month + day + year;
        setEventData({ ...eventData, date: date });
    }

    return (
        <Paper className={ classes.paper }>
            <Grid container direction="column" justify="center" alignItems="center" className={ classes.grid }>
                <Grid className={ classes.title }>
                    <TextField id="SubmitFormTitle" variant="outlined" label="Title" onChange={(e) => setEventData({ ...eventData, title: e.target.value })}/>
                </Grid>
                <Grid item className={classes.time} >
                    <DateSelector id="DateSelector" callBack={ callbackFunction3 }/>
                </Grid>
                <Grid item className={classes.description} >
                    <TextField id="SubmitFormDescription" multiline variant="outlined" label="Description" onChange={(e) => setEventData({ ...eventData, description: e.target.value })}/>
                </Grid>
                <Grid item className={classes.time} >
                    <TimeMenu name="Start Time" callBack={callbackFunction} />
                     - 
                    <TimeMenu name="End Time" callBack={callbackFunction2}/>
                </Grid>
                <Grid item className={classes.time} >
                    <Button className={classes.button} children="Cancel" />
                    <Button className={classes.button} children="Sumbit" onClick={ handleSubmit }/>
                </Grid>
            </Grid>
            
        </Paper>
    );
}

export default SubmitForm;