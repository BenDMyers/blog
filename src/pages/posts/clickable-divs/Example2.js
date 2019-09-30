import React from 'react';
import './example-button-styles.css';

const Example2 = () => {
	const doSomething = (event) => {
		event.target.innerText = "I've been clicked!";
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
