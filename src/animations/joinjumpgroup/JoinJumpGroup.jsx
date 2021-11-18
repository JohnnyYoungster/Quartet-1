import "./joinjumpgroup.css"
import React from "react"
import Animate from 'rc-animate';
import JoinPrompt from "../../components/prompt/JoinPrompt";
import Button from "antd/lib/button";


export default class JoinJumpGroup extends React.Component{

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
            <Button className="joinbutton" type="primary" onClick={this.onClick}>Join</Button>
            {/*<div className="Label" onClick={this.onClick}> #clickToJoin</div>*/}

            <Animate
                transitionName="fade"
                transitionAppear
                >
                {this.state.show ?
                <JoinPrompt /> : null}
                </Animate>
        </>


      );
    }
  }