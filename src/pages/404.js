import React from 'react';

import Page from '../components/common/PageTemplate';

/**
 * Dummy page when the requested route is unavailable.
 */
const NotFoundPage = (props) => {
	return (
		<Page location={props.location} title="404: Not Found">
			<h1>Not Found</h1>
			<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
		</Page>
	);
};

export default NotFoundPage;
