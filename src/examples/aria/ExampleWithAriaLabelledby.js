import React from 'react';
import './examples.css';

let switchIsActive = false;

function handleClick() {
    // Causes page to alternate between light and dark mode
    document.getElementById('toggle-example-with-aria-labelledby').classList.toggle('dark-mode');

    // Causes the toggle to change appearance
    document.querySelector('#toggle-example-with-aria-labelledby .toggle-switch').classList.toggle('active');

    // Modifies status contents
    switchIsActive = !switchIsActive;
    document.querySelector('#toggle-example-with-aria-labelledby .status').innerHTML = switchIsActive ? 'on' : 'off';
}

function handleKeyPress(event) {
    if (event.key === ' ') {
        event.preventDefault();
        handleClick();
    }
}

const ExampleWithAriaLabelledby = () => {
    return (
        <section
            id="toggle-example-with-aria-labelledby"
            className="toggle-example"
            aria-label="Toggle switch with aria-labelledby"
        >
            <div className="container">
                <div id="toggle-label">Use Dark Mode</div>
                <span
                    tabindex="0"
                    className="toggle-switch"
                    role="switch"
                    aria-labelledby="toggle-label"
                    onClick={handleClick}
                    onKeyPress={handleKeyPress}
                >
                    <span className="toggle-knob"></span>
                </span>
                <div>
                    Dark mode is <span className="status">off</span>
                </div>
            </div>
        </section>
    );
}

export default ExampleWithAriaLabelledby;