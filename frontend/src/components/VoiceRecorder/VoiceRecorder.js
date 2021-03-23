import React, { useState, useEffect } from 'react';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import StopIcon from '@material-ui/icons/Stop';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Fab from '@material-ui/core/Fab';
import { Grid, Button } from '@material-ui/core';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useDispatch, useSelector } from 'react-redux';
import { createEvent, updateEvent } from '../../actions/events';



const VoiceRecorder = (props) => {
    const { onClose, open } = props;
    const { transcript, resetTranscript } = useSpeechRecognition()
    const dispatch = useDispatch();
    const [eventData, setEventData] = useState({ title: 'BACKLOG', date: '', description: '', startTime: '', endTime: '' });

    const handleClose = () => {
        SpeechRecognition.stopListening();
        onClose();
    };

    const onSubmit = async () => {
        console.log(eventData);
        onClose();
        dispatch(createEvent(eventData));
    };
    const onStop = () => {
        setEventData({ ...eventData, description: transcript });
    }
    return (
        <Dialog onClose={handleClose} aria-labelledby="voice-record-popup" open={open}>
            <DialogTitle id="voice-record-popup">Start a voice recording</DialogTitle>
            <Grid container direction="row" justify="center" alignItems="center" >
                <Fab onClick={SpeechRecognition.startListening} color="primary" aria-label="voice-record">
                    <KeyboardVoiceIcon />
                </Fab>
                <Fab onClick={onStop} color="secondary" aria-label="record-stop">
                    <StopIcon />
                </Fab>
            </Grid>
            <p>{transcript}</p>
            <Button onClick={onSubmit}> Add backlog item</Button>
        </Dialog>);

};

export default VoiceRecorder;