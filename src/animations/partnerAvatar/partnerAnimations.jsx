import React from "react"
import Animate from 'rc-animate';
import TweenOne from "rc-tween-one";
import { react } from 'react.eval'
import userAvatar from "../../image/userAvatar.png"
import ShowGlowStick from '../../animations/glowstickanimation/GlowStickAnimation';
import ShowHeart from '../../animations/heartanimation/HeartAnimation';
import Draggable from "react-draggable"
import { useEffect } from "react/cjs/react.development";



const p0 = 'M0,100 L25,100 C34,20 40,0 100,0';
const p1 = 'M0,100 C5,120 25,130 25,100 C30,60 40,75 58,90 C69,98.5 83,99.5 100,100';
const ease0 = TweenOne.easing.path(p0);
const ease1 = TweenOne.easing.path(p1);
const PartnerAnimations=({PartnerState})=> {
    // useEffect(()=>{
    //     setInterval(() => {
    //     react('opHeart.onClick')
	// 	},3000);
    // },[]);

    
    return (
        <div className= "partnerBlocl">
            {/* <ShowHeart id='opHeart' className="showOpHeart"/>
            <ShowGlowStick id='opGlowstick'/> */}
            <img className="partner" src={userAvatar}/>
            Partner
        </div>
    )
};
export default PartnerAnimations;
