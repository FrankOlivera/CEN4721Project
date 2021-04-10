import React from 'react';
import VoiceRecorder from './VoiceRecorder'
import { Paper, Grid, Button, TextField } from '@material-ui/core';
import { SearchOutlined, Mic, HelpOutline, Settings } from '@material-ui/icons';
import useStyles from './styles';

const Header = () => {
    const classes = useStyles();
    const [openVoice, setOpenVoice] = React.useState(false);

    const handleClickVoiceOpen = () => {
        setOpenVoice(true);
    };

    const handleClickVoiceClose = () => {
        setOpenVoice(false);
    };

    return (
        <div>
            <Paper className={classes.paper}>
                <Grid container justify="flex-end" spacing={ 0 } className={classes.grid}>
                    <Grid item xs={5}>
                        <Button className={classes.buttons}><SearchOutlined className={classes.icons} />
                        </Button>
                        <TextField color="primary" InputProps={{ className: classes.textfield }} InputLabelProps={{ className: classes.textfield }} label="Search" variant="outlined" >
                        </TextField>
                    </Grid>
                    <Button className={classes.buttons} onClick={handleClickVoiceOpen}> <Mic className={classes.icons} /> </Button>
                    <Button className={classes.buttons} > <HelpOutline className={classes.icons} /> </Button>
                    <Button className={classes.buttons} > <Settings className={classes.icons} /> </Button>
                </Grid>
            </Paper>
            <VoiceRecorder openVoice={openVoice} handleClickVoiceClose={handleClickVoiceClose}/>
        </div>
    );
};

export default Header;