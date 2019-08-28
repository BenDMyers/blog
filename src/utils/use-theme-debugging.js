import {useState, useEffect} from 'react';

function useThemeDebugging(hardcoded) {
	let [theme, setTheme] = useState(null);

	useEffect(() => {
		if (hardcoded) {
			let newTheme = hardcoded === 'light' ? '#f0f0f0' : '#212121';
			document.body.style.backgroundColor = newTheme;
			setTheme(hardcoded);
		} else {
			let timer = setInterval(() => {
				document.body.style.backgroundColor = theme
					? '#f0f0f0'
					: '#212121';
				setTheme(theme ? null : 'dark');
			}, 5000);

			return () => {
				clearInterval(timer);
			};
		}
	}, [theme]);

	return hardcoded || theme;
}

export default useThemeDebugging;
