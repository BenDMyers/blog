import {useLayoutEffect, useRef, useState} from 'react';

/**
 * @link https://swizec.com/blog/usedimensions-a-react-hook-to-measure-dom-nodes/swizec/8983
 */
const useDimensions = () => {
	const targetRef = useRef();
	const [dimensions, setDimensions] = useState({});
	useLayoutEffect(() => {
		setDimensions(targetRef.current.getBoundingClientRect().toJSON());
	}, [targetRef.current, window.innerWidth]);
	return [targetRef, dimensions];
};

export const useScrollDimensions = () => {
	const targetRef = useRef();
	const [dimensions, setDimensions] = useState({});
	useLayoutEffect(() => {
		const {scrollWidth, scrollHeight} = targetRef.current;
		setDimensions({width: scrollWidth, height: scrollHeight});
	}, [targetRef.current]);
	return [targetRef, dimensions];
};

export default useDimensions;
