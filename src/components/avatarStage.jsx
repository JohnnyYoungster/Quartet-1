import React,{useState} from 'react';
import styled from 'styled-components';
import BottomBar from './bottombar/BottomBar';
//import userAvatar from "../image/userAvatar.png"
//import Draggable from "react-draggable"
import "./avatarStage.css"
import Avatars from '../animations/avatars/Avatars';
//import ShowGlowStick from '../animations/glowstickanimation/GlowStickAnimation';
//import ShowHeart from '../animations/heartanimation/HeartAnimation';
//import IndividualJump from '../animations/individualjump/IndividualJump';
import AfterJoin from '../animations/afterjoin/AfterJoin';
import UserAvatarVanish from '../animations/useravatarvanish/UserAvatarVanish';
import AnnounceBar from './bottombar/AnnounceBar';
import NPC from './npc/NPC';
import Partner from './npc/Partner';
import Partner2 from './npc/Partner2';



const Layout = styled.div`
height: 200px;
background-color: skyblue;
`;

const AvatarStage = ({ isAudience, setBroadcast, p1name, p2name,
    setP1action
    ,p1action, p2action}) => {
    // const [announce, setAnnounce] = useState();
    return (
        <>
        <Layout>
            {/*
            <Draggable>
                
                
                <div className= "userBlock">
                <ShowHeart id='heart' className="showHeart"/>
                <ShowGlowStick id='glowstick'/>
                <img className="User" src={userAvatar} alt="userAvatar"/>
                       
            
                </div>
                
               
            
            </Draggable>
            */}
            { isAudience &&<AfterJoin id='aferjoin'/> }
            {/*<IndividualJump id='indiJump' />*/}

            {isAudience && <UserAvatarVanish id='vanish'/> }
            <Avatars id='ava'></Avatars>
            <Partner action={p2action} name={p2name}/> 
            {!isAudience && <Partner2 action={p1action} name={p1name}/>}
            <NPC/>
        </Layout>
        
        
        {/*<JoinJumpGroup></JoinJumpGroup>*/}
        
        {isAudience&&<BottomBar setP1action={setP1action}></BottomBar>}
        {!isAudience&&<AnnounceBar setAnnounce={setBroadcast}></AnnounceBar>}
        </>
    );
};

export default AvatarStage;