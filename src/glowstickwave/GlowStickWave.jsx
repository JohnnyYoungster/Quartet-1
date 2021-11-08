import "./glowstickwave.css"
import TweenOne from "rc-tween-one"
import glowStick from "./../image/glowStickLogo.png"
//import GlowStickkk from "./../useravatar/UserAvatar"

export default function Swing(props) {
  return (
    <>
    <TweenOne className="glowstickswing"
      animation={{ 
        x: 10, 
        scale: 1, 
        rotate: 240, 
        yoyo: true, 
        repeat: -1,
        duration: 1000
      }}
      paused={props.paused}
      style={{ transform: 'translateX(-80px)' }}
      
    >
    <img className="glowStick" src={glowStick} alt="glowStick" />
    </TweenOne>
    
    </>

    
    
  );
  
}