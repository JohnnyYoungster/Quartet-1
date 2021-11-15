import "./glowstickanimation.css"
import React from "react"
import Animate from "rc-animate"
//import glowStickLogo from "../../image/glowStickLogo.png"
import Swing from "../glowstickwave/GlowStickWave"
import { react } from 'react.eval'

export default class ShowGlowStick extends React.Component{

    constructor() {
      super(...arguments);
      this.state = {
        show: false,
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
        
      }, 5000);
    }


    render(){
      return (
        <>
            <div  onClick={this.onClick}/>

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


