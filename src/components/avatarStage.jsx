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



const Layout = styled.div`
height: 200px;
background-color: skyblue;
`;

const AvatarStage = ({ isAudience, setBroadcast}) => {
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

            <UserAvatarVanish id='vanish'/>
            <Avatars id='ava'></Avatars>
            <Partner action={0}/>
            <NPC/>
        </Layout>
        
        
        {/*<JoinJumpGroup></JoinJumpGroup>*/}
        
        {isAudience&&<BottomBar></BottomBar>}
        {!isAudience&&<AnnounceBar setAnnounce={setBroadcast}></AnnounceBar>}
        </>
    );
};

export default AvatarStage;