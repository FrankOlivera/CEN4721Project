import React, { useState } from 'react';
import { Stop,KeyboardVoice } from '@material-ui/icons';
import { DialogTitle, Dialog, Fab, Grid, Button } from '@material-ui/core';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useDispatch } from 'react-redux';
import { createEvent } from '../../actions/events';



const VoiceRecorder = ({ handleClickVoiceClose, openVoice }) => {
    const { transcript, resetTranscript } = useSpeechRecognition();
    const [eventData, setEventData] = useState({ title: '', date: '', description: '', startTime: '', endTime: '' });

    const dispatch = useDispatch();

    const handleClickDialogClose = () => {
        SpeechRecognition.stopListening();
        handleClickVoiceClose();
    };

    const handleClickDialogSubmit = async () => {
        handleClickVoiceClose();
        dispatch(createEvent(eventData));
    };
    const handleClickDialogStop = () => {
        setEventData({ ...eventData, description: transcript });
    }
    return (
        <Dialog onClose={handleClickDialogClose} aria-labelledby="voice-record-popup" open={openVoice}>
            <DialogTitle id="voice-record-popup">Start a voice recording</DialogTitle>
            <Grid container direction="row" justify="center" alignItems="center" >
                <Fab onClick={SpeechRecognition.startListening} color="primary" aria-label="voice-record">
                    <KeyboardVoice />
                </Fab>
                <Fab onClick={handleClickDialogStop} color="secondary" aria-label="record-stop">
                    <Stop />
                </Fab>
            </Grid>
            <p>{transcript}</p>
            <Button onClick={handleClickDialogSubmit}>Add backlog item</Button>
        </Dialog>);

};

export default VoiceRecorder;