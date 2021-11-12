import React, { useState, useCallback, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import mp3_file from './sample.mp3';
import audio_file1 from './megalovania_bass.mp3'
import audio_file2 from './megalovania_melody.mp3'
import audio_file3 from './megalovania_drums.mp3'
import audio_file_combined from './megalovania_combined.mp3'
import ReactPlayer from 'react-player'

const Layout = styled.div`
height: 600px;
background-color: black;
`;
const links = [
	"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
	"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  ];
const Player = () => {
	// const [isPlayingVideo, setPlayingVideo] = useState(false);
	// const [isPlayingMusic, setPlayingMusic] = useState(false);
	const [isPlaying, setPlaying] = useState(false);
	// const audio_bass = useMemo(() => new Audio(audio_file1), []);
	// const audio_melody = useMemo(() => new Audio(audio_file2), []);
	// const audio_drums = useMemo(() => new Audio(audio_file3), []);
	const audio_combined = useMemo(() => new Audio(audio_file_combined), []);
	const [readyCount, setReadyCount] = useState(0);
	  const onReady = () => {
		setReadyCount(readyCount + 1);
	  };
	
	  useEffect(() => {
		if (readyCount === links.length) {
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
			{links.map((url) => (
        <ReactPlayer key={url} playing={false} onReady={onReady} url={url} volume={1}/>
      ))}
        </Layout>
    );
};

export default Player;