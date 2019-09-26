import React from 'react';
import './example-button-styles.css';

const Example1 = () => {
	const doSomething = (event) => {
		event.target.innerText = "I've been clicked!";
	};

	return (
		<div className="btn-wrapper">
			<div className="btn" onClick={doSomething}>
				Click me!
			</div>
		</div>
	);
};

export default Example1;
