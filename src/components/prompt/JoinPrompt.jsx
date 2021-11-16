import "./joinprompt.css"
import JumpPrompt from "../../image/jumpPrompt.png"
import { react } from 'react.eval'
import React from "react";

import Button from "antd/lib/button";
//import JoinJumpGroup from "../../animations/joinjumpgroup/JoinJumpGroup";


export default function JoinPrompt(){
  
  
  const join =(event)=>{
    react('vanish.onClick')
    react('aferjoin.onClick')
    react('ava.onClick')
    //window.location.href="https://google.com"
}
  
    return (
        <div>
            <img className="JumpPrompt" src={JumpPrompt} alt="JumpPrompt" />
              <p className="buttons">
                <Button type="primary" onClick={join}>Yes</Button>
              </p>    
            
        </div>  
          );
        
}

/*
export default function Prompt() {
    return (
        <img className="JumpPrompt" src={JumpPrompt} alt="JumpPrompt" />

    )
}
*/