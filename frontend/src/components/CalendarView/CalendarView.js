//importing from main npm's
import React, { useState, useEffect } from 'react';
import { Button, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

//importing specific npm's and components
import Calendar from 'react-calendar';
import SubmitForm from './SubmitForm/SubmitForm';
import Events from './Events/Events';

//importing requests
import { getEvents } from '../../actions/events';

//importing styling
import useStyles from './styles';
import './Calendar.css'

const CalendarView = () => {
    const [currentId, setCurrentId] = useState(0);
    const [date, setDate] = useState(new Date());
    const [addEvent, setAddEvent] = useState(false);
    const dispatch = useDispatch();

    const classes = useStyles();

    useEffect(() => {
        dispatch(getEvents());
    }, [currentId, dispatch]);

    return (
        <div>
            <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                <Grid item>
                    <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                        <Grid item>
                            <SubmitForm currentId={currentId} setCurrentId={setCurrentId} date={ date }/>
                        </Grid>
                        <Grid item>
                            <Calendar onChange={setDate} value={date} />
                            <Events setCurrentId={setCurrentId} date={ date } />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button>HIHIHIHIHIH</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default CalendarView;
