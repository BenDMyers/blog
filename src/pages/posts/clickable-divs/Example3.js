import React, {useEffect} from 'react';
import './example-button-styles.css';

let flag = true;

const ENTER = 13;
const SPACE = 32;

const Example3 = () => {
	const doSomething = (event) => {
		event.target.innerText = flag ? "I've been clicked!" : 'Click me!';
		flag = !flag;
	};

	useEffect(() => {
		let myButton = document.getElementById('example-3');
		let keyPressListener = myButton.addEventListener('keydown', (event) => {
			if (event.keyCode === ENTER || event.keyCode === SPACE) {
				event.preventDefault();
				doSomething(event);
			}
		});

		return () => {
			myButton.removeEventListener('click', keyPressListener);
		};
	});

	return (
		<div className="btn-wrapper">
			<div
				id="example-3"
				className="btn"
				tabIndex="0"
				onClick={doSomething}
			>
				Click me!
			</div>
		</div>
	);
};

export default Example3;
