import React from 'react';
import './examples.css';

let switchIsActive = false;

function handleClick() {
    // Causes page to alternate between light and dark mode
    document.getElementById('toggle-example-before-aria').classList.toggle('dark-mode');

    // Causes the toggle to change appearance
    document.querySelector('#toggle-example-before-aria .toggle-switch').classList.toggle('active');

    // Modifies status contents
    switchIsActive = !switchIsActive;
    document.querySelector('#toggle-example-before-aria .status').innerHTML = switchIsActive ? 'on' : 'off';
}

function handleKeyPress(event) {
    if (event.key === ' ' || event.key === 'Enter') {
        // Prevents unintentional form submissions, page scrolls, the like
        event.preventDefault();

        handleClick();
    }
}

const ExampleBeforeAria = () => {
    return (
        <section
            id="toggle-example-before-aria"
            className="toggle-example"
            aria-label="Toggle switch before ARIA"
        >
            <div className="container">
                <span
                    tabindex="0"
                    className="toggle-switch"
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

export default ExampleBeforeAria;