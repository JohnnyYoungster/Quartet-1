import React, { useState, useCallback, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import mp3_file from './resources/sample.mp3';
import audio_file1 from './resources/megalovania_bass.mp3'
import audio_file2 from './resources/megalovania_melody.mp3'
import audio_file3 from './resources/megalovania_drums.mp3'
import audio_file_combined from './resources/megalovania_combined.mp3'
// import movie_left from './resources/megalovania_left.mp4'
// import movie_center from './resources/megalovania_center.mp4'
// import movie_right from './resources/megalovania_right.mp4'
import ReactPlayer from 'react-player'

const Layout = styled.div`
height: 600px;
background-color: black;
`;
const resources = [
	"https://streamable.com/lb2qtx",
	"https://streamable.com/2s91p6",
	"https://streamable.com/qhr92h"
  ];
// const resources=[
// 	movie_left,movie_center,movie_right
// ]
const Player = () => {
	// const [isPlayingVideo, setPlayingVideo] = useState(false);
	// const [isPlayingMusic, setPlayingMusic] = useState(false);
	const [isPlaying, setPlaying] = useState(false);
	// const audio_bass = useMemo(() => new Audio(audio_file1), []);
	// const audio_melody = useMemo(() => new Audio(audio_file2), []);
	// const audio_drums = useMemo(() => new Audio(audio_file3), []);
	const audio_combined = useMemo(() => new Audio(audio_file_combined), []);
	const [readyCount, setReadyCount] = useState(0);
	  const onReady = useCallback(() => {
		setReadyCount(readyCount + 1);
	  },[]);
	
	  useEffect(() => {
		if (readyCount === resources.length) {
		  setPlaying(true);
		}
	  }, [readyCount]);

	useEffect(() => {
		if (isPlaying) {
			audio_combined.play();
		} else {
			audio_combined.pause();
		}
	}, [ isPlaying, audio_combined]);
	
	const play= useCallback(()=>{setPlaying(true)},[]);
	const pause= useCallback(()=>{setPlaying(false)},[]);

    return (
        <Layout>
			
			<div>Player</div>
			<button onClick={play}>Play</button> 
         <button onClick={pause}>Pause</button>
			{resources.map((url) => (
        <ReactPlayer key={url} playing={isPlaying} onReady={onReady} url={url} volume={0} controls={false}
		width="40%"
		height="40%"
		/>
      ))}
        </Layout>
    );
};

export default Player;