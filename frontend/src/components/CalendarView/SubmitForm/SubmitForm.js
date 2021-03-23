import { useState, useEffect } from 'react';
import { Paper, TextField, Grid, Button } from '@material-ui/core';
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
                setEventData({ ...eventData, startTime: "8:00am",endTime: "9:00am"});
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
            alert("Please Add a Title or change from BACKLOG");
        }
        else if (timeToNumber(eventData.startTime) > timeToNumber(eventData.endTime)) {
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

    const timeToNumber = (e) => {
        switch (e) {
            case '12:00am': return 1; case '12:15am': return 2; case '12:30am': return 3; case '12:45am': return 4; case '1:00am': return 5; case '1:15am': return 6; case '1:30am': return 7; case '1:45am': return 8;
            case '2:00am': return 9; case '2:15am': return 10; case '2:30am': return 11; case '2:45am': return 12; case '3:00am': return 13; case '3:15am': return 14; case '3:30am': return 15; case '3:45am': return 16;
            case '4:00am': return 17; case '4:15am': return 18; case '4:30am': return 19; case '4:45am': return 20; case '5:00am': return 21; case '5:15am': return 22; case '5:30am': return 23; case '5:45am': return 24;
            case '6:00am': return 25; case '6:15am': return 26; case '6:30am': return 27; case '6:45am': return 28; case '7:00am': return 29; case '7:15am': return 30; case '7:30am': return 31; case '7:45am': return 32;
            case '8:00am': return 33; case '8:15am': return 34; case '8:30am': return 35; case '8:45am': return 36; case '9:00am': return 37; case '9:15am': return 38; case '9:30am': return 39; case '9:45am': return 40;
            case '10:00am': return 41; case '10:15am': return 42; case '10:30am': return 43; case '10:45am': return 44; case '11:00am': return 45; case '11:15am': return 46; case '11:30am': return 47; case '11:45am': return 48;
            case '12:00pm': return 49; case '12:15pm': return 50; case '12:30pm': return 51; case '12:45pm': return 52; case '1:00pm': return 53; case '1:15pm': return 54; case '1:30pm': return 55; case '1:45pm': return 56;
            case '2:00pm': return 57; case '2:15pm': return 58; case '2:30pm': return 59; case '2:45pm': return 60; case '3:00pm': return 61; case '3:15pm': return 62; case '3:30pm': return 63; case '3:45pm': return 64;
            case '4:00pm': return 65; case '4:15pm': return 66; case '4:30pm': return 67; case '4:45pm': return 68; case '5:00pm': return 69; case '5:15pm': return 70; case '5:30pm': return 71; case '5:45pm': return 72;
            case '6:00pm': return 73; case '6:15pm': return 74; case '6:30pm': return 75; case '6:45pm': return 76; case '7:00pm': return 77; case '7:15pm': return 78; case '7:30pm': return 79; case '7:45pm': return 80;
            case '8:00pm': return 81; case '8:15pm': return 82; case '8:30pm': return 83; case '8:45pm': return 84; case '9:00pm': return 85; case '9:15pm': return 86; case '9:30pm': return 87; case '9:45pm': return 88;
            case '10:00pm': return 89; case '10:15pm': return 90; case '10:30pm': return 91; case '10:45pm': return 92; case '11:00pm': return 93; case '11:15pm': return 94; case '11:30pm': return 95; case '11:45pm': return 96; default: return 0;
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