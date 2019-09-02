import React from 'react';
import useDarkMode from 'use-dark-mode';
import Toggle from 'react-toggle';
import {FaMoon as Moon} from 'react-icons/fa';
import {TiAdjustBrightness as Sun} from 'react-icons/ti';
import './dark-mode-toggle.css';

const DarkModeToggle = () => {
	const darkMode = useDarkMode();
	return (
		<Toggle
			aria-label="Use Dark Mode"
			checked={darkMode.value}
			onChange={darkMode.toggle}
			icons={{
				checked: <Moon />,
				unchecked: <Sun />
			}}
		/>
	);
};

export default DarkModeToggle;
