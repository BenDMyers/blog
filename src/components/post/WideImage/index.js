import React from 'react';

import './wide-image.css';

const WideImage = ({src, alt, caption}) => {
	let image = <img className="wide-image" src={src} alt={alt} />;

	if (caption) {
		return (
			<figure className="wide-image-figure">
				{image}
				<figcaption className="wide-image-caption">
					{caption}
				</figcaption>
			</figure>
		);
	} else {
		return image;
	}
};

export default WideImage;
