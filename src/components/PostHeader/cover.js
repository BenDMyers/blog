export default (cover) => {
	const className = `post-header ${cover ? 'with-cover' : 'without-cover'}`;
	const style = {};
	cover &&
		(style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cover})`);

	return {className, style};
};
