import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {  } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';

//Styling

//import Components
import CalendarView from './components/CalendarView/CalendarView';
import Header from './components/Header/Header';



const App = () => {

    //https://reactjs.org/docs/hooks-reference.html#usestateuse
    const [currentId, setCurrentId] = useState(0);

    //https://react-redux.js.org/api/hooks
    const dispatch = useDispatch();


    //https://reactjs.org/docs/hooks-reference.html#useeffect
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);



    return (
        <div>
            <Header/>
            <CalendarView />
        </div>
    );
};

export default App;
