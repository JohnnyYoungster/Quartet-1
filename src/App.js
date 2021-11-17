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

const actions = {
	NOTHING: 0,
	HEART: 1,
	JUMP: 2,
	GLOW: 3,
    CLAP: 4,
    GROUPJUMP: 5
}

const App = () => {
    const [ token, setToken ] = React.useState();
    const [ isAudience, setAudience ] = React.useState(true);
    const [ broadcast, setBroadcast]=React.useState("");
    const [ playing, setPlaying]=React.useState(false);

    useEffect(() => {
        // console.log('initial');
        (async () => {
            const response = await instance.get('/test');
            // console.log(response.data);
        })();
    }, []);

    // Send server that music should be playing
    useEffect(() => {
        (async () => {
            if(!isAudience){
            const response = await instance.get('/play',{params:{
                isAudience: isAudience,
                isPlaying: playing
            }});
        }
            // console.log(response.data);
        })();
    }, [playing]);
    
    // Send server broadcastMessage
    useEffect(() => {
        (async () => {
            const response = await instance.get('/broadcast',{params:{
                isAudience: isAudience,
                broadcast: broadcast
            }});
            console.log(response.data.broadcast);
        })();
    }, [broadcast]);
    
    // Update OtherPlayerDataList every 3 seconds
    useEffect(() => {
        ( () => {
            setInterval(async ()=>
            {const response = await instance.get('/update');
            // console.log(response.data.isPlaying);
            if(isAudience){
                setPlaying(response.data.isPlaying);
                setBroadcast(response.data.broadcast);
            }
        },10000);
        })();
    }, []);

    // Autoplay music in case of no server integration

    // useEffect(() => {
    //     ( () => {
    //         setInterval(()=>
    //         setPlaying(true)
    //     ,5000);
    //     })();
    // }, []);

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
