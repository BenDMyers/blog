import React from 'react';
import {rhythm} from '../../../utils/typography';

const Img = ({style, ...props}) => {
	let newStyles = {
		...style,
		width: `calc(100% + ${rhythm(3 / 4)} + ${rhythm(3 / 4)}`,
		marginLeft: `-${rhythm(7 / 4)}`
	};
	return <img {...props} style={newStyles} />;
};

export default Img;
