import { useState } from 'react';
import { Menu, Button, MenuItem } from '@material-ui/core';

import useStyles from './styles.js'

const options = [
    '12:00am',
    '12:15am',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
];

function TimeMenu(props) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);
    const [time, setT] = useState(props.name);

    function SetTime(e) {
        props.callBack(e);
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleTimeClick = (event) => {
        setT(event.target.textContent);
        SetTime(event.target.textContent);
        handleClose();
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button className={classes.button} children={time} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
            <Menu className={classes.menu}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{ style: { maxHeight: 200 } }}
            >
                {options.map((option) => (
                    <MenuItem key={option.toString()} className={classes.menuItems} children={option} onClick={handleTimeClick} />
                ))}

            </Menu>
        </>
    );
}

export default TimeMenu;