import React from 'react';
import './index.css';
import clapImg from '../../image/clap.png';

var clickedTime; var createdTime; var reactionTime; 
var decreaseFlag;
var score = 0;

function startDecrease() {  
  if (!decreaseFlag) {
    decreaseFlag = setInterval(decreaseBorder, 10)
  }
}

function decreaseBorder () {
  var targetBorder = document.getElementById("stack");
  if (targetBorder != null) {
    var currentSize = targetBorder.clientWidth;
    if (currentSize != 180) {
      targetBorder.style.left = parseInt(targetBorder.style.left, 10) + 1 + "px"
      targetBorder.style.top = parseInt(targetBorder.style.top, 10) + 1 + "px"
      targetBorder.style.width = (currentSize - 2) + "px";
      targetBorder.style.height = (currentSize - 2) + "px";
  
    }
    else {
      targetBorder.style.display = "none";
      clearInterval(decreaseFlag);
      decreaseFlag = null;
    }
  }
}

function borderDecrease() {
  var targetBorder = document.getElementById("stack");
  if (targetBorder != null) {
    document.getElementById("stack").style.top = 100 + "px";
    document.getElementById("stack").style.left = 100 + "px"; 
    document.getElementById("stack").style.display="block";

    startDecrease();
  
    /*var targetBorder = document.getElementById("stack");*/
    targetBorder.style.width = "380px";
    targetBorder.style.height = "380px";
  }
}

function Audience() {
  return (
    <div className="App">
      <h1>Clap to the Beat!</h1>
		  <p>Press the orange clap button when the inner red outline matches with the shape of the button. </p>
		  <p id="displayScore"></p>
      <div class = "container">
        <div id="box">
          <img src = {clapImg}></img>
        </div>
        <div id="stack"></div>
      </div>
    </div>
  );
}

function waitForLoad(id, callback){
  var timer = setInterval(function(){
      if(document.getElementById(id)){
          clearInterval(timer);
          callback();
      }
  }, 100);
}

window.onload = function() {
  waitForLoad("box", function(){
    initButton();
  });
}

function initButton() {
  document.getElementById("box").onclick = function()
  {
    var targetBorder = document.getElementById("stack");
    var temp = parseInt(targetBorder.style.width, 10)
    if ((temp > 360) || (temp < 200)) {
      score = score + 500;
    }
    else if ((temp > 350) || (temp < 210)) {
      score = score + 300;
    }

    document.getElementById("displayScore").innerHTML="Your Score is: " + score;

    makeBox();
  }
  
  var t = setInterval(borderDecrease, 1000);
  setTimeout(function(){ makeBox() }, 1000);
}

function makeBox() {
  setTimeout(function() {			
	  document.getElementById("box").style.top = 200 + "px";
	  document.getElementById("box").style.left = 200 + "px";

	  document.getElementById("box").style.backgroundColor="#FFA500";
	  document.getElementById("box").style.display="block";	
  }, 0); 
			
}


export default Audience;
