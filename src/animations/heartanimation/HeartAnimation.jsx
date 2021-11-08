import "./heartanimation.css"
import React from "react"
import Animate from 'rc-animate';
import heartLogo from "../../image/heartLogo.png"
import heart from "../../image/heart.png"

export default class ShowHeart extends React.Component{

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
            <img className="heartLogo" src={heartLogo} alt="heartLogo"  onClick={this.onClick}/>

            <Animate
                transitionName="fade"
                transitionAppear
                >
                {this.state.show ?
                <img className="Heart" src={heart} alt="heart" /> : null}
                </Animate>
        </>


      );
    }
  }