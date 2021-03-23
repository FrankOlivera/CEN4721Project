//Styling

//import Components
import CalendarView from './components/CalendarView/CalendarView';
import Header from './components/Header/Header';
import {React} from 'react';
import { useSelector } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import BacklogItem from './components/VoiceRecorder/BacklogItem.js'

const App = () => {
    const events = useSelector((state) => {
        let events = [];
        state.events.map((event) => { if (event.title === "BACKLOG") { events.push(event) } });
        return events;
    });
    //https://reactjs.org/docs/hooks-reference.html#usestateuse
    //const [currentId, setCurrentId] = useState(0);

    //https://react-redux.js.org/api/hooks
    //const dispatch = useDispatch();


    //https://reactjs.org/docs/hooks-reference.html#useeffect
    /*useEffect(() => {
        dispatch(getEvents());
    }, [dispatch]);*/



    return (
        <div>
            <Header />
            <CalendarView/>
            {events.map((event) => (
                        <Grid key={event.description} item xs={12} sm={6} md={6}>
                            <BacklogItem event={event} />
                        </Grid>
                    ))}
        </div>
    );
};

export default App;
