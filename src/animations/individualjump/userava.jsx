
import React from "react"
import Animate from 'rc-animate';
import { react } from 'react.eval'
import userAvatar from "../../image/userAvatar.png"
import ShowGlowStick from '../../animations/glowstickanimation/GlowStickAnimation';
import ShowHeart from '../../animations/heartanimation/HeartAnimation';
import Draggable from "react-draggable"

export default class UserAva extends React.Component{

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

      setTimeout(() => {this.setState({
        show: !this.state.show,
      })
        
      }, 4300);
      
    }

    

    render(){
      return (
        <>

            <Animate
                transitionName="fade"
                transitionAppear
                
                >
                {this.state.show ?
                
                <div className= "userBlock">
                <ShowHeart id='heart' className="showHeart"/>
                <ShowGlowStick id='glowstick'/>
                <img className="User" src={userAvatar} alt="userAvatar"/>
                </div>
                : null
              }
                
                
                </Animate>

                

        </>


      );
    }
  }