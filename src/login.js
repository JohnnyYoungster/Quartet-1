import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './login.css';

// async function loginUser(credentials) {
//   // 13.209.255.184
//   // 172.31.19.57
// http://13.209.255.184:50002/login
//  return fetch("http://localhost:8080/login", {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify(credentials)
//  })
//    .then(data => data.json())
// }

// const proxy = require("http-proxy-middleware");
// module.exports = function (app) {

//     app.use(proxy("/api", {
//         target: "http://13.209.255.184:8090/login,", 
//         changeOrigin:true,
//         ws: true,
//         router: {
//             'localhost:3000': 'http://localhost:3001',
//         }
//     }));

// }
export default function Login({ setToken, setAudience}) {
  const [username, setUserName] = useState();
  // const [password, setPassword] = useState();
  const handleSubmitPerformer = async e => {
    e.preventDefault();
    // const token = await loginUser({
    //   username
    // });
    setToken(1);
    setAudience(false);
  }

  const handleSubmitAudience = async e => {
    e.preventDefault();
    // const token = await loginUser({
    //   username
    // });
    setToken(1);
    setAudience(true);
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <div>
          <button type="Performer" onClick={handleSubmitPerformer}>Performer </button>
          <button type="Audience"  onClick={handleSubmitAudience}>Audience</button>
        </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};