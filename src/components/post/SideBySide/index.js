import React from 'react';
import './side-by-side.css';

const SideBySide = (props) => {
    return (
        <div className="side-by-side">
            <div className="side-by-side--left">
                {props.children[0]}
            </div>
            <div className="side-by-side--right">
                {props.children[1]}
            </div>
        </div>
    );
};

export default SideBySide;