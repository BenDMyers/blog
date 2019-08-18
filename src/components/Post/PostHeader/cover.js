import {rhythm} from '../../../utils/typography';

export default (cover) => {
	const className = `post-header ${cover ? 'with-cover' : 'without-cover'}`;
	const style = {};
	cover &&
		(style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cover})`) &&
		// This ugliness is to make sure the cover photo expands to fill the entire container width,
		// ignoring padding. I hate it as much as you do.
		(style.width = `calc(100% + ${rhythm(3 / 4)} + ${rhythm(3 / 4)})`) &&
		(style.marginLeft = `-${rhythm(3 / 4)}`);

	return {className, style};
};
