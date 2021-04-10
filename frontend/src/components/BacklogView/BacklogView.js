import BacklogItem from './BacklogItem';

import { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { getEvents } from '../../actions/events';

import useStyles from './styles';

const BacklogView = ({ currentId, setCurrentId, setOpenSubmit }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEvents());
    }, [currentId, dispatch]);

    const backlogs = useSelector((state) => {
        let backlogs = [];
        state.events.forEach((backlog) => { if (backlog.title === "") { backlogs.push(backlog) } });
        return backlogs;
    });

    return (
        <>
            <Typography className={classes.ty} > Backlog</Typography>
            {backlogs.map((backlog) => (
                <BacklogItem key={ backlog._id } event={backlog} currentId={currentId} setCurrentId={setCurrentId} setOpenSubmit={setOpenSubmit} />
            ))}

        </>
    );
};

export default BacklogView;
