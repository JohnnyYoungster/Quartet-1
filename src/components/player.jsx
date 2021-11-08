import React, { useState, useCallback, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import mp3_file from './sample.mp3';

const Layout = styled.div`
height: 200px;
background-color: yellow;
`;

const Player = () => {
	const [ isPlaying, setIsPlaying ] = useState(false);
	const audio = useMemo(() => new Audio(mp3_file), []);

	const play = useCallback(() => {
		setIsPlaying(true);
	}, []);

	const pause = useCallback(() => {
		setIsPlaying(false);
	}, []);

	useEffect(() => {
		if (isPlaying) {
			audio.play();
		} else {
			audio.pause();
		}
	}, [ isPlaying ]);

    return (
        <Layout>
			<div>Player</div>
			<button onClick={play}>Play</button>
			<button onClick={pause}>Pause</button>
        </Layout>
    );
};

export default Player;