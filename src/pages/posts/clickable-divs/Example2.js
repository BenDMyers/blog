import React from 'react';
import './example-button-styles.css';

let flag = true;

const Example2 = () => {
	const doSomething = (event) => {
		event.target.innerText = flag ? "I've been clicked!" : 'Click me!';
	};

	return (
		<div className="btn-wrapper">
			<div className="btn" tabIndex="0" onClick={doSomething}>
				Click me!
			</div>
		</div>
	);
};

export default Example2;
