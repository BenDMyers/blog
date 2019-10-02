import React from 'react';
import './example-button-styles.css';

let flag = true;

const Example1 = () => {
	const doSomething = (event) => {
		event.target.innerText = flag ? "I've been clicked!" : 'Click me!';
		flag = !flag;
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
