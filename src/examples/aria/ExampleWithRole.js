import React from 'react';
import './examples.css';

let switchIsActive = false;

function handleClick() {
    // Causes page to alternate between light and dark mode
    document.getElementById('toggle-example-with-role').classList.toggle('dark-mode');

    // Causes the toggle to change appearance
    document.querySelector('#toggle-example-with-role .toggle-switch').classList.toggle('active');

    // Modifies status contents
    switchIsActive = !switchIsActive;
    document.querySelector('#toggle-example-with-role .status').innerHTML = switchIsActive ? 'on' : 'off';
}

function handleKeyPress(event) {
    if (event.key === ' ' || event.key === 'Enter') {
        // Prevents unintentional form submissions, page scrolls, the like
        event.preventDefault();

        handleClick();
    }
}

const ExampleWithRole = () => {
    return (
        <section
            id="toggle-example-with-role"
            className="toggle-example"
            aria-label="Toggle switch with an ARIA role"
        >
            <div className="container">
                <span
                    tabindex="0"
                    className="toggle-switch"
                    role="switch"
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

export default ExampleWithRole;