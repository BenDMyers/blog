import React from 'react';

let switchIsActive = false;

function handleChange() {
    // Causes page to alternate between light and dark mode
    document.getElementById('toggle-example-with-checkbox').classList.toggle('dark-mode');

    // Causes the toggle to change appearance
    document.querySelector('#toggle-example-with-checkbox .toggle-switch').classList.toggle('active');

    // Modifies status contents
    switchIsActive = !switchIsActive;
    document.querySelector('#toggle-example-with-checkbox .status').innerHTML = switchIsActive ? 'on' : 'off';
}

const ExampleWithCheckbox = () => {
    return (
        <section
            id="toggle-example-with-checkbox"
            className="toggle-example"
            aria-label="Toggle switch using a semantic checkbox"
        >
            <div className="container">
                <label className="toggle-switch-semantic">
                    <span className="screenreader">
                        Use dark mode
                    </span>
                    <input
                        type="checkbox"
                        className="screenreader"
                        onChange={handleChange}
                    />
                    <span className="toggle-switch">
                        <span className="toggle-knob"></span>
                    </span>
                </label>
                <div>
                    Dark mode is <span className="status">off</span>
                </div>
            </div>
        </section>
    );
}

export default ExampleWithCheckbox;