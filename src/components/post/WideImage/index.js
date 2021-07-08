import React from 'react';

import './wide-image.css';
import toId from '../../../utils/to-id';

const WideImage = ({src, alt, caption, adaptive, longDescription}) => {
    let wrapperClass = `wide-image-figure ${adaptive ? 'adaptive' : ''}`;
    let describerId;

    let imageAttributes = {
        className: 'wide-image',
        src,
        alt
    };

    if(longDescription) {
        describerId = `image-${toId(src)}-description`;
        imageAttributes['aria-describedby'] = describerId;
    }

    let image = <img {...imageAttributes} />;

	if (caption || adaptive || longDescription) {
		return (
			<figure className={wrapperClass}>
				{image}
				{caption && (
                    <figcaption className="wide-image-caption">
					    {caption}
                    </figcaption>
                )}
                {longDescription && (
                    <span id={describerId} style={{display: 'none'}}>
                        {longDescription}
                    </span>
                )}
			</figure>
		);
	} else {
		return image;
	}
};

export default WideImage;
