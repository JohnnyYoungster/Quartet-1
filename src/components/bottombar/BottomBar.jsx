import "./bottombar.css"
import heartLogo from "../../image/heartLogo.png"
import jumpLogo from "../../image/jumpLogo.png"
import glow from "../../image/glowstick.png"
//import Swing from "./../glowstickanimation/GlowStickAnimation.jsx"
import { react } from 'react.eval'



export default function BottomBar() {
    const glowStickClick =(event)=>{
      react('glowstick.onClick')
    }

    const heartClick =(event)=>{
      react('heart.onClick')
    }


    const jumpClick =(event)=>{
      react('indiJump.onClick')
    }


    return (
        <div className = "bottom">
            

            <img className="heartLogo" src={heartLogo} alt="heartLogo" onClick={heartClick} />
            <img className="jumpLogo" src={jumpLogo} alt="jumpLogo" onClick={jumpClick} />
            <img className="glow" src={glow} alt="glow" onClick={glowStickClick} />

        </div>
    )
}



/*
export default class BottomBar extends React.Component{

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
        <div className = "bottom">
            <img className="glowStickLogo" src={glowStickLogo} alt="glowStickLogo" />

            <img className="heartLogo" src={heartLogo} alt="heartLogo"  onClick={this.onClick}/>

            <img className="jumpLogo" src={jumpLogo} alt="jumpLogo"/>
        </div>





          <Draggable>
          <div className="code-box-shape">
          <Animate
              transitionName="fade"
              transitionAppear
            >
            {this.state.show ?
              <img  className="heart" src={heart} alt="heart" /> : null}
            </Animate>

            <img className="userAvatar" src={userAvatar} alt="userAvatar" />

          </div>
          </Draggable>
        </>


      );
    }
  }
*/