import React from 'react';
import { Card, Typography } from '@material-ui/core/';
import useStyles from './styles.js';


const BacklogItem = ({ event }) => {
    const classes = useStyles();

    return (
        <Card className={classes.ty}>
                <Typography className={ classes.ty } variant="h6">{event.description}</Typography>
        </Card>
    );
};

export default BacklogItem;