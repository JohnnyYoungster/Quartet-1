import "./leavejumpgroup.css"
import React from "react"
import Animate from 'rc-animate';
import LeavePrompt from "../../components/prompt/LeavePrompt";


export default class LeaveJumpGroup extends React.Component{

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
            <div className="Labell" onClick={this.onClick}> #clickToLeave</div>

            <Animate
                transitionName="fade"
                transitionAppear
                >
                {this.state.show ?
                <LeavePrompt /> : null}
                </Animate>
        </>


      );
    }
  }