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
	GLOW: 2,
	JUMP: 3,
    CLAP: 4,
    GROUPJUMP: 5
}

const App = () => {
    const [ token, setToken ] = React.useState();
    const [ isAudience, setAudience ] = React.useState(true);
    const [ broadcast, setBroadcast]=React.useState("");
    const [ playing, setPlaying]=React.useState(false);

    const [userAction, setUserAction]=React.useState(0);
    const [opScore, setOpScore]=React.useState(0);    

    const [p1action, setP1action]=React.useState(0);
    const [p1name, setP1name]=React.useState("");
    const [p2name, setP2name]=React.useState("");
    const [p2action, setP2action]=React.useState(0);

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
            // console.log(response.data);
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
                // console.log(response.data.broadcast);
            })();
        }
    }, [broadcast]);
    
    // Update OtherPlayerDataList every 3 seconds
    useEffect(() => {
        ( () => {
            if(token){
            setInterval(async ()=>
            {const response = await instance.get('/update');
            // console.log(p1action);
            // console.log(response.data.p1action);
            // console.log(response.data.p2action);
            if(isAudience ){
                setPlaying(response.data.isPlaying);
                if(response.data.broadcast!=""){setBroadcast(response.data.broadcast);}
                if(response.data.p2name==token){
                    setP2name(response.data.p1name);
                    setP1name(response.data.p2name);
                    setP2action(response.data.p1action);
                    setOpScore(response.data.p1score);
                }
                else if(response.data.p1name==token){
                    setP1name(response.data.p1name);
                    setP2name(response.data.p2name);
                    setP2action(response.data.p2action);
                    setOpScore(response.data.p2score);
                }
            }
            else{
                setP1name(response.data.p1name);
                setP2name(response.data.p2name);
                setP1action(response.data.p1action);
                setP2action(response.data.p2action);
            }
            },3000);}
        })();
    }, [token]);

    // Send action data
    useEffect(() => {
        if(isAudience){
            // console.log("sending data");
            // console.log(userAction);
            (async () => {
                const response = await instance.get('/action',{params:{
                    name: token,
                    action: userAction
                }});
            })();
        }
    }, [userAction]);

    // Send login data
    useEffect(() => {
        // console.log(token);
        if(isAudience && token!=undefined){
            (async () => {
                const response = await instance.get('/name',{params:{
                    name: token
                }});
                // console.log(response.data);
            })();
        }
    }, [token]);

    

    // Login Screen

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
                msg={broadcast} 
                sendServerPlay={setPlaying} playedFromServer={playing} 
                isClapping={p1action==4 || p2action==4}
            />
            <AvatarStage isAudience={isAudience} setBroadcast={setBroadcast}
            p1name={p1name} p2name={p2name}
            setUserAction={setUserAction}
            p1action={p1action} p2action={p2action}
            />
            { isAudience ? <Audience opScore={opScore} token={token}/> : <Performer /> }
        </Router>
    );
};

export default App;
