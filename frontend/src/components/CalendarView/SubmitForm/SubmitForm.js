import { useState, useEffect } from 'react';
import { Paper, TextField, Grid, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import TimeMenu from './TimeMenu/TimeMenu';
import DateSelector from './DateSelector/DateSelector'

import { createEvent, updateEvent } from '../../../actions/events';

const SubmitForm = ({ currentId, setCurrentId, date }) => {
    const [eventData, setEventData] = useState({ title: '', date: toStringDate(), description: '', startTime: '',endTime: '' });
    const dispatch = useDispatch();
    const classes = useStyles();

    function toStringDate() {
        const stringDate = numberToMonth(date.getMonth()) + date.getDate().toString() + date.getFullYear().toString();
        return stringDate;
    }

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

    useEffect(() => {
        const newDate = numberToMonth(date.getMonth()) + date.getDate().toString() + date.getFullYear().toString();
        setEventData({ ...eventData, date: newDate });
    }, [date]);

    const clear = () => {
        document.getElementById("SubmitFormTitle").value = "";
        document.getElementById("SubmitFormDescription").value = "";
        setCurrentId(0);
        setEventData({ title: '',
            date: '',
            description: '',
            startTime: '',
            endTime: '' });
    };

    const handleSubmit = async () => {
        //Check Title
        //Check Time



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

    return (
        <Paper className={ classes.paper }>
            <Grid container direction="column" justify="center" alignItems="center" className={ classes.grid }>
                <Grid className={ classes.title }>
                    <TextField id="SubmitFormTitle" variant="outlined" label="Title" onChange={(e) => setEventData({ ...eventData, title: e.target.value })}/>
                </Grid>
                <Grid item className={classes.time} >
                    <DateSelector id="DateSelector" date={date} eventData={eventData} setEventData={setEventData} numberToMonth={ numberToMonth }/>
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