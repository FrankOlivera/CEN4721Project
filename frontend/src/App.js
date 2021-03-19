import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {  } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';

//Styling
import './App.css'

//import Components


//import logo from 'pages/MIL_logo_sml.jpg'

//console.log(logo); 

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
        </div>
    );
};

export default App;
