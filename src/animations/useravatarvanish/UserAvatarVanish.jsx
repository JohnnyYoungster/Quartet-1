import "./useravatarvanish.css";
import IndividualJump from '../../animations/individualjump/IndividualJump';
import React from "react"
import Animate from 'rc-animate';
import heartLogo from "../../image/heartLogo.png"
import heart from "../../image/heart.png"
import { react } from 'react.eval'


export default class UserAvatarVanish extends React.Component{

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
                <IndividualJump  id='indiJump' />: null
              }
                
                
                </Animate>

                

        </>


      );
    }
  }
