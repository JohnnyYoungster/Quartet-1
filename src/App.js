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
            <Player isAudience={isAudience}/>
            <AvatarStage isAudience={isAudience}/>
            { isAudience ? <Audience /> : <Performer /> }
        </Router>
    );
};

export default App;
