import React from "react"
import TweenOne from "rc-tween-one";
import "./avatars.css"
import avatar1 from '../../image/avatar1.png'
import avatar2 from '../../image/avatar2.png';
import JoinJumpGroup from './../../animations/joinjumpgroup/JoinJumpGroup';
import { react } from 'react.eval'
import Animate from 'rc-animate'

const p0 = 'M0,100 L25,100 C34,20 40,0 100,0';
const p1 = 'M0,100 C5,120 25,130 25,100 C30,60 40,75 58,90 C69,98.5 83,99.5 100,100';
const ease0 = TweenOne.easing.path(p0);
const ease1 = TweenOne.easing.path(p1);
export default class Avatars extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      show: true,
    };
    [
      'onClick',
    ].forEach((method) => this[method] = this[method].bind(this));  
    react.init(this);
  }

  onClick(){
    this.setState({
      show: !this.state.show,
    });

    /*
    setTimeout(() => {this.setState({
      show: !this.state.show,
    })
      
    }, 3000);
    */
  }

  render() {
    return (
    
      <>
      <div onClick={this.onClick} />

      <Animate
          transitionName="fade"
          transitionAppear
          
          >
          {this.state.show ?
          <div className="jumpcrowd">
          {/* <TweenOne
             animation={this.animation}
             paused={this.props.paused}
             style={{
               position: 'absolute',
               transformOrigin: 'center bottom',
             }}
             >
               <img className="avatar1" src={avatar1} alt="avatar1" />
   
               <img className="avatar2" src={avatar2} alt="avatar2" />
   
               <img className="avatar3" src={avatar1} alt="avatar1" />
   
               <img className="avatar4" src={avatar2} alt="avatar2" />
   
               <img className="avatar5" src={avatar1} alt="avatar1" />
   
               <img className="avatar6" src={avatar2} alt="avatar2" />
   
               <img className="avatar7" src={avatar1} alt="avatar2" />
   
               <img className="avatar8" src={avatar2} alt="avatar2" />
   
               <JoinJumpGroup></JoinJumpGroup>
           </TweenOne> */}
           
           
           <TweenOne
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
             paused={this.props.paused}
             style={{
               position: 'absolute',
               transformOrigin: 'center bottom',
             }}
             >
               <img className="avatar1" src={avatar1} alt="avatar1" />
           </TweenOne>
           
           <TweenOne
             animation={[
               { 
                 delay:100,
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
             paused={this.props.paused}
             style={{
               position: 'absolute',
               transformOrigin: 'center bottom',
             }}
             >
               <img className="avatar2" src={avatar2} alt="avatar2" />
           </TweenOne>
           
           <TweenOne
             animation={[
               { 
                 delay:200,
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
             paused={this.props.paused}
             style={{
               position: 'absolute',
               transformOrigin: 'center bottom',
             }}
             >
               <img className="avatar3" src={avatar1} alt="avatar1" />
           </TweenOne>
             
   
           <TweenOne
             animation={[
               { 
                 delay:300,
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
             paused={this.props.paused}
             style={{
               position: 'absolute',
               transformOrigin: 'center bottom',
             }}
             >
               <img className="avatar4" src={avatar2} alt="avatar2" />
           </TweenOne>
   
           <TweenOne
             animation={[
               { 
                 delay:400,
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
             paused={this.props.paused}
             style={{
               position: 'absolute',
               transformOrigin: 'center bottom',
             }}
             >
               <img className="avatar5" src={avatar1} alt="avatar1" />
           </TweenOne>
   
           <TweenOne
             animation={[
               { 
                 delay:500,
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
             paused={this.props.paused}
             style={{
               position: 'absolute',
               transformOrigin: 'center bottom',
             }}
             >
               <img className="avatar6" src={avatar2} alt="avatar2" />
           </TweenOne>
           
   
           <TweenOne
             animation={[
               { 
                 delay:600,
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
             paused={this.props.paused}
             style={{
               position: 'absolute',
               transformOrigin: 'center bottom',
             }}
             >
               <img className="avatar7" src={avatar1} alt="avatar" />
           </TweenOne>
   
   
           <TweenOne
             animation={[
               { 
                 delay:700,
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
             paused={this.props.paused}
             style={{
               position: 'absolute',
               transformOrigin: 'center bottom',
             }}
             >
               <img className="avatar8" src={avatar2} alt="avatar2" />
           </TweenOne>
           <JoinJumpGroup></JoinJumpGroup>
   
           
   
           {/*
           <div className="minigamecrowd">
           <img className="avatar9" src={avatar1} alt="avatar2" />
           <img className="avatar10" src={avatar2} alt="userAvatar" />
           <img className="avatar11" src={avatar2} alt="avatar2" />
           <img className="avatar12" src={avatar1} alt="userAvatar" />
           <img className="avatar13" src={avatar2} alt="avatar2" />
           </div>
           */}
       </div>: null
        }
          
          
          </Animate>

          

  </>
    
    
    
    );
  }
}




