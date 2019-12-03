// HTML
export const htmlBeforeAria = `<div id="container">
    <span
        tabindex="0"
        class="toggle-switch"
    >
        <span class="toggle-knob"></span>
    </span>
    <div>
        Dark mode is <span class="status">off</span>
    </div>
</div>`;

export const htmlWithRole = `<div id="container">
    <span
        tabindex="0"
        class="toggle-switch"
        role="switch"
    >
        <span class="toggle-knob"></span>
    </span>
    <div>
        Dark mode is <span class="status">off</span>
    </div>
</div>`;

export const htmlWithAriaLabel = `<div id="container">
    <span
        tabindex="0"
        class="toggle-switch"
        role="switch"
        aria-label="Use dark mode"
    >
        <span class="toggle-knob"></span>
    </span>
    <div>
        Dark mode is <span class="status">off</span>
    </div>
</div>`;;

export const htmlWithAriaLabelledby = `<div id="container">
    <div id="toggle-label">Use Dark Mode</div>
    <span
        tabindex="0"
        class="toggle-switch"
        aria-labelledby="toggle-label"
    >
        <span class="toggle-knob"></span>
    </span>
    <div>
        Dark mode is <span class="status">off</span>
    </div>
</div>`;

export const htmlWithAriaChecked = `<div id="container">
    <span
        tabindex="0"
        class="toggle-switch"
        role="switch"
        aria-label="Use dark mode"
        aria-checked="false"
    >
        <span class="toggle-knob"></span>
    </span>
    <div>
        Dark mode is <span class="status">off</span>
    </div>
</div>`;

// JS
export const jsBeforeAria = `const toggler = document.querySelector('.toggle-switch');
const switchStatus = document.querySelector('.status');

let switchIsActive = false;

// Called whenever you click on the toggle
function handleClick() {
    // Causes page to alternate between light and dark mode
    document.body.classList.toggle('dark-mode');

    // Causes the toggle to change appearance
    toggler.classList.toggle('active');

    // Modifies status contents
    switchIsActive = !switchIsActive;
    switchStatus.innerHTML = switchIsActive ? 'on' : 'off';
}

// Adds keyboard events to the toggle
toggler.addEventListener('keydown', function (event) {
    if (event.key === ' ') {
        // Prevents unintentional form submissions, page scrolls, the like
        event.preventDefault();

        handleClick();
    }
});

toggler.onclick = handleClick;`;

export const jsWithAriaChecked = `const toggler = document.querySelector('.toggle-switch');
const switchStatus = document.querySelector('.status');

let switchIsActive = false;

// Called whenever you click on the toggle
function handleClick() {
    // Causes page to alternate between light and dark mode
    document.body.classList.toggle('dark-mode');

    // Causes the toggle to change appearance
    toggler.classList.toggle('active');

    // Modifies status contents
    switchIsActive = !switchIsActive;
    switchStatus.innerHTML = switchIsActive ? 'on' : 'off';
  
    // Toggle aria-checked
    toggler.setAttribute('aria-checked', switchIsActive);
}

// Adds keyboard events to the toggle
toggler.addEventListener('keydown', function (event) {
    if (event.key === ' ') {
        // Prevents unintentional form submissions, page scrolls, the like
        event.preventDefault();

        handleClick();
    }
});

toggler.onclick = handleClick;`;

// CSS
export const css = `.toggle-switch, .toggle-switch .toggle-knob {
    transition: all 0.2s ease-in;
}

.toggle-switch {
    height: 90px;
    width: 165px;
    display: inline-block;
    background-color: #333333;
    margin: 6px;
    margin-bottom: 15px;
    border-radius: 90px;
    cursor: pointer;
    text-align: left;
}

.toggle-switch .toggle-knob {
    width: 84px;
    height: 78px;
    display: inline-block;
    background-color: #ffffff;
    border-radius: 78px;
    margin: 6px 9px;
}

.toggle-switch.active {
    background-color: #f31455;
}

.toggle-switch.active .toggle-knob {
    margin-left: 72px;
}

/* Focus styles */
.toggle-switch:focus {
    outline: none;
}

.toggle-switch:focus .toggle-knob {
    box-shadow: 0px 0px 5px 5px #229abf;
}`;