import React from 'react';
import ReactPlayer from 'react-player';

import './video.css';

const youtubeConfig = {
    playerVars: {
        color: 'red', // Progress bar color
        controls: 1, // Show controls while playing video,
        modestbranding: true // Don't show YouTube logo in corner
    }
};

const Video = (props) => {
    return (
        <div className="video-player-container">
            <ReactPlayer
                className="video-player"
                url={props.url}
                width="100%"
                height="100%"
                config={{ youtube: youtubeConfig }}
            />
        </div>
    );
};

export default Video;