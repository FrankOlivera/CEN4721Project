import { useState, useEffect } from 'react';
import {TextField, Grid, Button } from '@material-ui/core';
import { useDispatch,useSelector } from 'react-redux';

import useStyles from './styles';
import TimeMenu from './TimeMenu/TimeMenu';
import DateSelector from './DateSelector/DateSelector'

import { createEvent, updateEvent } from '../../../actions/events';

const SubmitForm = ({ currentId, setCurrentId, date, handleClose, numberToMonth }) => {
    const [eventData, setEventData] = useState({ title: '', date: toStringDate(), description: '', startTime: '8:00am',endTime: '9:00am' });
    const event = useSelector((state) => (currentId ? state.events.find((e) => e._id === currentId) : null));
    const [titleError, setTitleError] = useState(false);

    const dispatch = useDispatch();
    const classes = useStyles();

    function toStringDate() {
        const stringDate = numberToMonth(date.getMonth()) + date.getDate().toString() + date.getFullYear().toString();
        return stringDate;
    }

    useEffect(() => {
        const newDate = numberToMonth(date.getMonth()) + date.getDate().toString() + date.getFullYear().toString();
        setEventData({ ...eventData, date: newDate });
    }, [date]);

    useEffect(() => {
        if (event) {
            setEventData(event);
            if (eventData.startTime === "") {
                setEventData({ ...eventData, date: toStringDate(), startTime: "8:00am",endTime: "9:00am"});
            }
        }
    }, [event]);


    const clear = () => {
        setTitleError(false);
        setCurrentId(0);
        setEventData({
            title: '',
            date: eventData.date,
            description: '',
            startTime: eventData.startTime,
            endTime: eventData.endTime });
    };

    const handleSubmit = async () => {
        console.log("done");
        if (document.getElementById("SubmitFormTitle").value === '' || document.getElementById("SubmitFormTitle").value === 'BACKLOG') {
            setTitleError(true);
            alert("Please Add a Title");
        }
        else if (!(testTime(eventData.startTime,eventData.endTime))) {
            setTitleError(false);
            alert("End Time should come after Start Time");
        }
        else {
            if (currentId === 0) {
                console.log(eventData);
                await dispatch(createEvent(eventData));
                clear();
            }
            else {
                dispatch(updateEvent(currentId, eventData));
                handleClose();
                clear();
            }
        }
    };

    function testTime(time1, time2) {
        const time1Hour = parseInt(time1.substring(0, time1.length - 5));
        const time2Hour = parseInt(time2.substring(0, time2.length - 5));
        const time1Min = parseInt(time1.substring(time1.length-4, time1.length - 2));
        const time2Min = parseInt(time2.substring(time2.length - 4, time2.length - 2));
        if (time1.substring(time1.length - 2, time1.length) === "am") {
            if (time2.substring(time2.length - 2, time2.length) === "am") {
                if (time1Hour > time2Hour) {
                    if (time1Hour === 12) {
                        return true;
                    }
                    return false;
                }
                else if (time1Hour === time2Hour) {
                    if (time1Min > time2Min) {return false;}
                    else {return true;}
                }
                else {return true;} 
            }
            else {return true;}
        }
        else {
            if (time2.substring(time2.length - 2, time2.length) === "am") {return false;}
            else {
                if (time1Hour > time2Hour) {
                    if (time1Hour === 12) {
                        return true;
                    }
                    return false;
                }
                else if (time1Hour === time2Hour) {
                    if (time1Min > time2Min) {return false;}
                    else {return true;}
                }
                else {return true;} 
            }
        }
    }

    const callbackFunction = (time) => {
        setEventData({ ...eventData, startTime: time });
    }
    const callbackFunction2 = (time) => {
        setEventData({ ...eventData, endTime: time });
    }

    return (
        <>
            <Grid container direction="column" justify="center" alignItems="center" className={ classes.grid }>
                <Grid item><TextField className={classes.title} error={titleError} id="SubmitFormTitle" variant="outlined" label="Title *" value={ eventData.title } onChange={(e) => setEventData({ ...eventData, title: e.target.value })}/></Grid>
                <Grid item><DateSelector className={classes.title} id="DateSelector" date={date} eventData={eventData} setEventData={setEventData} numberToMonth={ numberToMonth } /></Grid>
                <Grid item ><TextField className={classes.description} id="SubmitFormDescription" multiline rows={4} variant="outlined" label="Description" value={eventData.description} onChange={(e) => setEventData({ ...eventData, description: e.target.value })}/></Grid>
                <Grid item><TimeMenu className={classes.time} name={eventData.startTime} callBack={callbackFunction} />{" - "} <TimeMenu name={ eventData.endTime } callBack={callbackFunction2}/></Grid>
                <Grid item>
                    <Button variant="contained" color="secondary" size="small" className={classes.button} children="Cancel" onClick={handleClose} />
                    <Button variant="contained" color="primary" size="small" className={classes.button} children="Sumbit" onClick={handleSubmit} />
                </Grid>
            </Grid>
            
        </>
    );
}

export default SubmitForm;