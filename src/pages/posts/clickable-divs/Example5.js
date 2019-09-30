import React, {useState} from 'react';
import './example-button-styles.css';

const handleClick = (event) => {
	event.preventDefault();
	alert("You've pretended to log in!");
};

const useInput = () => {
	const [inputValue, setInputValue] = useState('');
	const setter = (event) => {
		setInputValue(event.target.value);
	};
	return [inputValue, setter];
};

const Example5 = () => {
	const [username, setUsername] = useInput();
	const [password, setPassword] = useInput();
	const valid = username.length && password.length;
	return (
		<div id="example-5-container">
			<p id="example-5-header">Log In</p>
			<p id="example-5-description">
				This is a dummy login component that won't do anything, but
				exists purely to demonstrate how forms can make button logic
				more complex. Try focusing on the button below while it's
				disabled, and then try once you've input values below.
			</p>
			<form
				aria-describedby="example-5-description"
				onSubmit={handleClick}
			>
				<label htmlFor="example-5-username">
					Username&nbsp;
					<span className="screenreader">(Dummy field)</span>
				</label>
				<input
					id="example-5-username"
					type="text"
					onChange={setUsername}
				/>
				<label htmlFor="example-5-password">
					Password&nbsp;
					<span className="screenreader">(Dummy field)</span>
				</label>
				<input
					id="example-5-password"
					type="password"
					onChange={setPassword}
				/>
				<div id="example-5-btn-wrapper">
					<button
						className="btn"
						onClick={handleClick}
						disabled={!valid}
					>
						Log In&nbsp;
						<span className="screenreader">(Dummy button)</span>
					</button>
				</div>
			</form>
		</div>
	);
};

export default Example5;
