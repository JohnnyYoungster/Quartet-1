import "./heartanimation.css"
import React from "react"
import Animate from 'rc-animate';
//import heartLogo from "../../image/heartLogo.png"
import heart from "../../image/heart.png"
import { react } from 'react.eval'


export default class ShowHeart extends React.Component{

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
        
      }, 3000);
      
    }

    

    render(){
      return (
        <>
            <div className="show-Heart" onClick={this.onClick}/>

            <Animate
                transitionName="fade"
                transitionAppear
                
                >
                {this.state.show ?
                <img className="Heart" src={heart} alt="heart" />: null
              }
                
                
                </Animate>

                

        </>


      );
    }
  }

/*
import heart from "../../image/heart.png"
import "./heartanimation.css"
import React from "react"
import Animate from 'rc-animate';
import Button from 'antd/lib/button';
const Div = (props) => {
  const childrenProps = { ...props };
  delete childrenProps.show;
  return <div {...childrenProps} />;
};
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
      <div className="code-box-demo-wrapper">
        <p className="buttons">
          <Button type="primary" onClick={this.onClick}>Switch</Button>
        </p>
        <Animate
          showProp="show"
          transitionName="fade"
        >
          <Div show={this.state.show}>
          <img className="Heart" src={heart} alt="heart"/>
          </Div> 
        </Animate>
      </div>
    );
  }
}
*/