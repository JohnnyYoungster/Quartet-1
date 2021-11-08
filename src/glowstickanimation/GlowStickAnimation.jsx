import "./glowstickanimation.css"
import React from "react"
import Animate from "rc-animate"
import glowStickLogo from "./../image/glowStickLogo.png"
import Swing from "./../glowstickwave/GlowStickWave"


export default class ShowGlowStick extends React.Component{
    
    constructor() {
      super(...arguments);
      this.state = {
        show: false,
      };
      [
        'onClick',
      ].forEach((method) => this[method] = this[method].bind(this));
    }
    
    onClick(){
      this.setState({
        show: !this.state.show,
      });
    }
    
    
    render(){
      return (
        <>
            <img className="glowStickLogo" src={glowStickLogo} alt="glowStickLogo"  onClick={this.onClick}/>

            <Animate
                transitionName="fade"
                transitionAppear
                >
                {this.state.show ? 
                <Swing/> : null}
                </Animate>
         
        </>
        
        
      );
    }
  }


