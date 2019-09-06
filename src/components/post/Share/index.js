import React from 'react';
import {useHover} from 'use-hooks';
import {
	FacebookShareButton,
	TwitterShareButton,
	LinkedinShareButton,
	RedditShareButton
} from 'react-share';
import {
	FaFacebookF as FacebookIcon,
	FaTwitter as TwitterIcon,
	FaLinkedin as LinkedInIcon,
	FaRedditAlien as RedditIcon
} from 'react-icons/fa';

import {Anchor} from '../AnchoredHeadings';
import './share-buttons.css';

const Share = ({page, pageTitle}) => {
	const pageUrl = `https://blog.benmyers.dev${page}`;

	const [ref, isHovered] = useHover();
	const shareHeading = (
		<h2 ref={ref} id="share" className="share-heading">
			<Anchor slug="share" isHovered={isHovered} />
			Share This Post
		</h2>
	);

	return (
		<section className="share-section" aria-labelledby="share">
			{shareHeading}
			<p>
				If you found this post interesting or helpful, please give it a
				share!
			</p>
			<div className="social-share">
				<FacebookShareButton
					url={pageUrl}
					className="social-button facebook"
					additionalProps={{
						'aria-label': 'Share on Facebook',
						title: 'Share on Facebook'
					}}
				>
					<FacebookIcon />
				</FacebookShareButton>
				<TwitterShareButton
					url={pageUrl}
					title={pageTitle}
					via="BenDMyers"
					className="social-button twitter"
					additionalProps={{
						'aria-label': 'Share on Twitter',
						title: 'Share on Twitter'
					}}
				>
					<TwitterIcon />
				</TwitterShareButton>
				<LinkedinShareButton
					url={pageUrl}
					className="social-button linkedin"
					additionalProps={{
						'aria-label': 'Share on LinkedIn',
						title: 'Share on LinkedIn'
					}}
				>
					<LinkedInIcon />
				</LinkedinShareButton>
				<RedditShareButton
					url={pageUrl}
					className="social-button reddit"
					additionalProps={{
						'aria-label': 'Share on Reddit',
						title: 'Share on Reddit'
					}}
				>
					<RedditIcon />
				</RedditShareButton>
			</div>
		</section>
	);
};

export default Share;
