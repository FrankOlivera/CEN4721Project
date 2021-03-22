import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';


const Event = ({ event, setCurrentId }) => {

    return (
        <Card>
            <div >
                <Typography variant="h6">{event.title}</Typography>
            </div>
        </Card>
    );
};

export default Event;