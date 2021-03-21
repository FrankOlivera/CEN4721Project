import React, { useState, useEffect } from 'react';
import { Paper,Grid,Button, TextField } from '@material-ui/core';
import { SearchOutlined, Mic, HelpOutline, Settings  } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { getPosts } from '../../actions/posts';

const Header = () => {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.paper}>
                <Grid container justify="flex-end" spacing="0" className={classes.grid}>
                    <Grid item xs={5}>
                        <Button className={classes.buttons}><SearchOutlined className={classes.icons} />
                        </Button>
                        <TextField color="secondary" InputProps={{className: classes.textfield}} InputLabelProps={{className: classes.textfield}} label="Search" variant="outlined" >
                        </TextField>
                    </Grid>
                    <Button className={ classes.buttons }> <Mic className={classes.icons} /> </Button>
                    <Button className={ classes.buttons } > <HelpOutline className={classes.icons} /> </Button>
                    <Button className={ classes.buttons } > <Settings className={classes.icons}/> </Button>
                </Grid>
            </Paper>
        </div>
    );
};

export default Header;