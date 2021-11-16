import React, { useState } from 'react';
import megaphone from "../../image/megaphone.png"
import "./announceBar.css";


const AnnounceBar=({setAnnounce})=>{
    const [msg, setMsg] = useState();
    const onSubmit =async e=>{
        setAnnounce(msg);
    }

    return (
        <div className = "announceBar">
            
            <div className="textWrapper">
            <input type="textInput" onChange={e => setMsg(e.target.value)} onSubmit={onSubmit}
            placeholder='Communicate with your audience'
            style={{
                backgroundColor: 'white',
                borderWidth: 1,
                borderRadius: 15,
                width: 900,
                height: 30,
                fontFamily: 'Roboto',
                fontSize: 20,
                textAlign: 'center',
            }}/></div>
            <img className="megaphone" src={megaphone} alt="megaphone" onClick={onSubmit} />
        </div>
    )
};
export default AnnounceBar;