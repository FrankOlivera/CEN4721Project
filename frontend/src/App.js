import { useState } from 'react';
import { Grid } from "@material-ui/core";
import CalendarView from './components/CalendarView/CalendarView';
import BacklogView from './components/BacklogView/BacklogView'
import Header from './components/Header/Header';

const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const [openSubmit, setOpenSubmit] = useState(false);

    return (
        <>
            <Header/>
            <Grid container direction="row" alignItems="flex-start" justify="flex-start" spacing={2}>
                <Grid item xs={8}>
                    <CalendarView currentId={currentId} setCurrentId={setCurrentId} openSubmit={openSubmit} setOpenSubmit={ setOpenSubmit } />
                </Grid>
                <Grid item xs={4} >
                    <BacklogView currentId={currentId} setCurrentId={setCurrentId} setOpenSubmit={setOpenSubmit}/>
                </Grid>
            </Grid>
        </>
    );
};

export default App;
