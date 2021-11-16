import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Performer from './pages/performer/index';
import Audience from './pages/audience/index';
//import styled from 'styled-components';
import Player from './components/player';
import AvatarStage from './components/avatarStage';
import Login from './login';

const App = () => {
    const [ token, setToken ] = React.useState();
    const [ isAudience, setAudience ] = React.useState();
    const [ broadcast, setBroadcast]=React.useState();

    if (!token) {
        return (
            <Login
                setToken={setToken}
                setAudience={setAudience}
            />
        )
    }

    return(
        <Router>
            <Player isAudience={isAudience} msg={broadcast} setMsg={setBroadcast}/>
            <AvatarStage isAudience={isAudience} setBroadcast={setBroadcast}/>
            { isAudience ? <Audience /> : <Performer /> }
        </Router>
    );
};

export default App;
