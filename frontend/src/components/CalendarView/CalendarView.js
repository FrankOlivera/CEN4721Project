//importing from main npm's
import React, { useState, useEffect } from 'react';
import { Button, Grid, Dialog, DialogTitle } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
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
    const [openSubmit, setOpenSubmit] = useState(false);
    const dispatch = useDispatch();

    const classes = useStyles();

    useEffect(() => {
        dispatch(getEvents());
        console.log("tet");
    }, [currentId, dispatch]);

    const handleClose = () =>{
        setOpenSubmit(false);  
        setCurrentId(0);
    }

    const handleClickOpen = () => {
        setOpenSubmit(true);
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

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Calendar onChange={setDate} value={date} />
                    <Button className={ classes.addEventButton } variant="outlined" color="primary" onClick={handleClickOpen}>
                        <AddCircle />add event
                            </Button>
                    <Dialog onClose={handleClose} open={openSubmit}>
                        <DialogTitle className={classes.dialogtitle} id="simple-dialog-title">{currentId ? "Updating An Event" : 'Add Event'}</DialogTitle>
                        <SubmitForm numberToMonth={numberToMonth} currentId={currentId} setCurrentId={setCurrentId} handleClose={handleClose} date={date} />
                    </Dialog>
                </Grid>
                <Grid item>
                </Grid>
            </Grid>
            <Events numberToMonth={numberToMonth} setCurrentId={setCurrentId} currentId={currentId} date={date} setOpenSubmit={setOpenSubmit} />
            <Events numberToMonth={numberToMonth} setCurrentId={setCurrentId} currentId={currentId} date={date} setOpenSubmit={setOpenSubmit} />
        </>
    );
};

export default CalendarView;
