import React from 'react';
import ReactPlayer from 'react-player';

import './video.css';

const Video = (props) => {
    return (
        <div className="video-player-container">
            <ReactPlayer className="video-player" url={props.url} width="100%" height="100%" />
        </div>
    );
};

export default Video;