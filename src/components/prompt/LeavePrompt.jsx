import "./leaveprompt.css"
import leavePrompt from "../../image/leavePrompt.png"
import { react } from 'react.eval'
import React from "react";

import Button from "antd/lib/button";
//import JoinJumpGroup from "../../animations/joinjumpgroup/JoinJumpGroup";


export default function LeavePrompt(){
  
  
  const join =(event)=>{
    //react('aferjoin.onClick')
    //react('ava.onClick')
    react('vanish.onClick')
    react('aferjoin.onClick')
    react('ava.onClick')
    //react('indiJump.onClick')
}
  
    return (
        <div>
            <img className="leavePrompt" src={leavePrompt} alt="leavePrompt" />
              <p className="buttons">
                <Button type="primary" onClick={join}>Yes</Button>
              </p>    
            
        </div>  
          );
    } 