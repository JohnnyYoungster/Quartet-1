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
    const [token, setToken] = React.useState();
    const [isAudience, setAudience]=React.useState();
    if(!token) {
        return <Login setToken={setToken} setAudience={setAudience} />
    }
    if(isAudience){
        return(
        <Router>
            <div>
            <Player isAudience={isAudience}/>
            <AvatarStage/>
            <Audience/>
            </div>
        </Router>
        );
    }
    else{
        return(
            <Router>
                <div>
                <Player isAudience={isAudience}/>
                <AvatarStage/>
                <Performer/>
                </div>
            </Router>
            );
    }
};

export default App;
