//Styling

//import Components
import CalendarView from './components/CalendarView/CalendarView';
import Header from './components/Header/Header';

import React, { useState, useEffect } from 'react';



const App = () => {

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
            <Header/>
            <CalendarView/>
        </div>
    );
};

export default App;
