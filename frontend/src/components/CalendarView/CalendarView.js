import React, { useState, useEffect } from 'react';
import { Container, Button, Grid, FormGroup,TextField, F } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { } from '../../actions/posts';
import Calendar from 'react-calendar';
import './Calendar.css'

const CalendarView = () => {
    const [value, onChange] = useState(new Date());
    const classes = useStyles();
    return (
        <div>
            <Button className={classes.root}>Hook</Button>
            <Grid >
                    <Calendar onChange={onChange} value={value} />
            </Grid>
            <form>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={1}>
                    <Grid container spacing={1}>
                        <Grid item sm={10}>
                            <Calendar onChange={onChange} value={value} />
                        </Grid>
                        <Grid item sm={6}>
                            <field/>
                        </Grid>
                    </Grid>
                    
                    <Button type="submit" > Submit </Button>
                </Grid>
            </form>
        </div>
    );
};

export default CalendarView;
