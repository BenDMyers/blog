import React from 'react';
import './examples.css';

let switchIsActive = false;

function handleClick() {
    // Causes page to alternate between light and dark mode
    document.getElementById('toggle-example-with-aria-checked').classList.toggle('dark-mode');

    // Causes the toggle to change appearance
    document.querySelector('#toggle-example-with-aria-checked .toggle-switch').classList.toggle('active');

    // Modifies status contents
    switchIsActive = !switchIsActive;
    document.querySelector('#toggle-example-with-aria-checked .status').innerHTML = switchIsActive ? 'on' : 'off';

    document.querySelector('#toggle-example-with-aria-checked .toggle-switch').setAttribute('aria-checked', switchIsActive);
}

function handleKeyPress(event) {
    if (event.key === ' ' || event.key === 'Enter') {
        // Prevents unintentional form submissions, page scrolls, the like
        event.preventDefault();

        handleClick();
    }
}

const ExampleWithAriaChecked = () => {
    return (
        <section
            id="toggle-example-with-aria-checked"
            className="toggle-example"
            aria-label="Toggle switch with aria-checked"
        >
            <div className="container">
                <span
                    tabindex="0"
                    className="toggle-switch"
                    role="switch"
                    aria-label="Use dark mode"
                    aria-checked="false"
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

export default ExampleWithAriaChecked;