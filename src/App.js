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
    CLAP: 1,
    GROUPJUMP: 2
    // HEART: 3,
	// JUMP: 4,
	// GLOW: 5,
}

const App = () => {
    const [ token, setToken ] = React.useState();
    const [ isAudience, setAudience ] = React.useState(true);
    const [ broadcast, setBroadcast]=React.useState("");
    const [ playing, setPlaying]=React.useState(false);

    
    const [ actionState, setAction]=React.useState(actions.NOTHING);
    const [ partnerState, setPartnerAction]=React.useState(actions.NOTHING);

    useEffect(() => {
        (async () => {
            const response = await instance.get('/test');
        })();
    }, []);

    // Send server that music should be playing
    useEffect(() => {
        if(!isAudience){
        (async () => {
            const response = await instance.get('/play',{params:{
                isAudience: isAudience,
                isPlaying: playing
            }});
        }
        )();}
    }, [playing]);
    
    // Send server broadcastMessage
    useEffect(() => {
        if(!isAudience){
            (async () => {
                const response = await instance.get('/broadcast',{params:{
                    isAudience: isAudience,
                    broadcast: broadcast
                }});
                console.log(response.data.broadcast);
            })();
        }
    }, [broadcast]);
    
    // Update OtherPlayerDataList every 3 seconds
    useEffect(() => {
        ( () => {
            setInterval(async ()=>
            {const response = await instance.get('/update');
            if(isAudience && response.data.broadcast!=""){
                setPlaying(response.data.isPlaying);
                setBroadcast(response.data.broadcast);
            }
        },3000);
        })();
    }, []);

    // Send 

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
                sendServerPlay={setPlaying} playedFromServer={playing}
                setAction={setAction} partnerState={partnerState}
                />
            <AvatarStage isAudience={isAudience} setBroadcast={setBroadcast} partnerState={actions.NOTHING}
            />
            { isAudience ? <Audience /> : <Performer setAction={setAction} partnerState={partnerState}/> }
        </Router>
    );
};

export default App;
