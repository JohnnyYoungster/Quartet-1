import React from 'react';
import styled from 'styled-components';
import mp3_file from './sample.mp3';


const Layout = styled.div`
height: 200px;
background-color: yellow;
`;
// const tracks = [
//     {
//       title: string,
//       artist: string,
//       audioSrc: string | import,
//           image: string,
//       color: string,
//     },
//     ...
//     ...
//   ];

// const audioElement = new Audio(audio source);
class Music extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true,
    }
    // this.url = "http://streaming.tdiradio.com:8000/house.mp3";
    // this.src="sample.mp3";
    this.audio = new Audio(mp3_file);
    // this.src="";
    // this.audio=new Audio(this.url);
  }

  play = () => {
  this.setState({ play: true, pause: false })
    this.audio.play();
  }
  
  pause = () => {
  this.setState({ play: false, pause: true })
    this.audio.pause();
  }
  
  render() {
    
  return (
    <div>
      <button onClick={this.play}>Play</button>
      <button onClick={this.pause}>Pause</button>
    </div>
    );
  }
}

// ReactDOM.render(
//   <Music />,
//   document.getElementById('container')
// );

const Player = () => {
    return (
        <Layout>Player
            <Music> </Music>
        </Layout>
    );
};
export default Player;