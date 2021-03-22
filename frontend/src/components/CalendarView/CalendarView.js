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
    const [value, onChange] = useState(new Date());
    const dispatch = useDispatch();

    const classes = useStyles();

    const h = async () => {
        console.log(test);
        console.log(value.getMonth().toString() + value.getDate().toString() + value.getFullYear().toString());
        console.log(dispatch(getEvents()));
        console.log(test);
        console.log("test");
    }

    useEffect(() => {
        dispatch(getEvents());
    }, [currentId, dispatch]);

    return (
        <div>
            <Button onClick={ h }>CLICK </Button>
            <SubmitForm currentId={currentId} setCurrentId={setCurrentId} />
            <Events setCurrentId={setCurrentId } />

            <Button className={classes.root}>Hook</Button>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={1}>
                    <Calendar onChange={onChange} value={value} />
            </Grid>
            <form>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={1}>
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={1}>
                        <Grid item sm={10}>
                            <Calendar onChange={onChange} value={value} />
                        </Grid>
                        <Grid item sm={6}>
                        </Grid>
                    </Grid>
                    <Button type="submit" > Submit </Button>
                </Grid>
            </form>
        </div>
    );
};

export default CalendarView;
