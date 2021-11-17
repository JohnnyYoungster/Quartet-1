import React,{useState} from 'react';
import styled from 'styled-components';
import BottomBar from './bottombar/BottomBar';
import "./avatarStage.css"
import Avatars from '../animations/avatars/Avatars';
import AfterJoin from '../animations/afterjoin/AfterJoin';
import UserAvatarVanish from '../animations/useravatarvanish/UserAvatarVanish';
import AnnounceBar from './bottombar/AnnounceBar';
import PartnerAnimations from '../animations/partnerAvatar/partnerAnimations';



const Layout = styled.div`
height: 200px;
background-color: skyblue;
`;

const AvatarStage = ({ isAudience, setBroadcast, partnerState}) => {
    return (
        <>
        <Layout>
            { isAudience &&<AfterJoin id='aferjoin'/> }
            <UserAvatarVanish id='vanish'/>
            <Avatars id='ava'></Avatars>   
            { isAudience && partnerState==0 &&
                <div className="partnerBlock"><PartnerAnimations PartnerState={partnerState}></PartnerAnimations></div> 
            }
        </Layout>
        
        {isAudience&&<BottomBar></BottomBar>}
        {!isAudience&&<AnnounceBar setAnnounce={setBroadcast}></AnnounceBar>}
        </>
    );
};

export default AvatarStage;