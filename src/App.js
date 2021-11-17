import React, { useEffect } from 'react';
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
import instance from './axiosFactory.js';

const App = () => {
    const [ token, setToken ] = React.useState();
    const [ isAudience, setAudience ] = React.useState(true);
    const [ broadcast, setBroadcast]=React.useState();
    const [ playing, setPlaying]=React.useState(false);

    useEffect(() => {
        console.log('initial');
        (async () => {
            const response = await instance.get('/test');
            console.log(response.data);
        })();
    }, []);

    // Send server that music should be playing
    useEffect(() => {
        console.log('playing music');
        (async () => {
            const response = await instance.post('/play',{
                isAudience: isAudience,
                isPlaying: playing
            });
            console.log(response.data);
        })();
    }, [playing]);
    
    // Update OtherPlayerDataList every 3 seconds
    useEffect(() => {
        ( () => {
            setInterval(async ()=>
            {const response = await instance.post('/update');
            console.log(response.data);
            setPlaying(response.data.isPlaying);
        },3000);
        })();
    }, []);

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
            <Player 
                isAudience={isAudience} 
                msg={broadcast} setMsg={setBroadcast} 
                sendServerPlay={setPlaying} playedFromServer={playing}/>
            <AvatarStage isAudience={isAudience} setBroadcast={setBroadcast}/>
            { isAudience ? <Audience /> : <Performer /> }
        </Router>
    );
};

export default App;
