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
            <input type="textInput" onChange={e => setMsg(e.target.value)} onSubmit={onSubmit} />
            <img className="megaphone" src={megaphone} alt="megaphone" onClick={onSubmit} />
        </div>
    )
};
export default AnnounceBar;