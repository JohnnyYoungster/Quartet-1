import React from "react"
import "./npc.css"
import avatar1 from '../../image/avatar1.png'
import avatar2 from '../../image/avatar2.png';
import heart from "../../image/heart.png"
import TweenOne from "rc-tween-one";
import Swing from "../../animations/glowstickwave/GlowStickWave";
import glowStick from "../../image/glowStickLogo.png"

const p0 = 'M0,100 L25,100 C34,20 40,0 100,0';
const p1 = 'M0,100 C5,120 25,130 25,100 C30,60 40,75 58,90 C69,98.5 83,99.5 100,100';
const ease0 = TweenOne.easing.path(p0);
const ease1 = TweenOne.easing.path(p1);



export default class NPC extends React.Component {
    render(){
        return (
          <>
            <div className="minigamecrowd">
            
            <img className="avatar9" src={avatar1} alt="userAvatar"/>
            <img className="npcHeart" src={heart} alt="heart" />
            <img className="avatar10" src={avatar2} alt="userAvatar" />
            
            <TweenOne className="avatar11"
             animation={[
               {
                 repeatDelay: 200,
                 y: -70,
                 repeat: -1,
                 yoyo: true,
                 ease: ease0,
                 duration: 800
               },
               {
                 repeatDelay: 200,
                 appearTo: 0,
                 scaleX: 0,
                 scaleY: 2,
                 repeat: -1,
                 yoyo: true,
                 ease: ease1,
                 duration: 800,
               }
             ]}
             style={{
               position: 'absolute',
               transformOrigin: 'center bottom',
             }}
             >
              <img  src={avatar2} alt="avatar2" />
           </TweenOne>

           <img className="avatar12" src={avatar1} alt="userAvatar" />
           <img className="avatar13" src={avatar2} alt="avatar2" />
            </div>  
  
          </>
  
  
        );
      }
};

