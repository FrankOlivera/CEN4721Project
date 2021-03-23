import React from 'react';
import { Card, Typography } from '@material-ui/core/';


const BacklogItem = ({ event}) => {

    return (
        <Card>
            <div >
                <Typography variant="h6">{event.description}</Typography>
            </div>
        </Card>
    );
};

export default BacklogItem;