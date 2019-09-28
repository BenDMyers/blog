import React from 'react';
import {TwitterTweetEmbed} from 'react-twitter-embed';
import './tweet.css';

const Tweet = ({tweetId}) => {
	return (
		<div className="tweet-wrapper">
			<TwitterTweetEmbed tweetId={tweetId} options={{dnt: true}} />
		</div>
	);
};

export default Tweet;
