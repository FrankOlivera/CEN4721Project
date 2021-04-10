import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, Grid} from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';

import Calendar from 'react-calendar';
import SubmitForm from './SubmitForm/SubmitForm';
import Events from './Events/Events';

import useStyles from './styles';
import './Calendar.css'

const CalendarView = ({ currentId, setCurrentId, openSubmit, setOpenSubmit }) => {
    const [date, setDate] = useState(new Date());

    const classes = useStyles();

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
            <Grid container direction="row" alignItems="flex-end" justify="flex-start" spacing={2}>
                <Grid className={ classes.calendar } item>
                    <Calendar onChange={setDate} value={date} />
                </Grid>
                <Grid item>
                    <Button className={classes.calendar} variant="outlined" color="primary" onClick={handleClickOpen}>
                        <AddCircle />add event
                    </Button>
                </Grid>
            </Grid>
            <Dialog onClose={handleClose} open={openSubmit}>
                <DialogTitle className={classes.dialogtitle} id="simple-dialog-title">{currentId ? "Updating An Event" : 'Add Event'}</DialogTitle>
                <SubmitForm numberToMonth={numberToMonth} currentId={currentId} setCurrentId={setCurrentId} handleClose={handleClose} date={date} />
            </Dialog>

            <Events numberToMonth={numberToMonth} setCurrentId={setCurrentId} currentId={currentId} date={date} setOpenSubmit={setOpenSubmit} />
        </>
    );
};

export default CalendarView;
