import React from 'react';
import './footnotes.css';

const FootnotesContainer = ({children}) => {
	return (
		<section aria-labelledby="footnotes">
			<h2 id="footnotes">Footnotes</h2>
			<ol>
				{React.Children.map(children, (fn, index) => (
					<li id={`fn-${index}`} key={`fn-${index}`}>
						{fn}
					</li>
				))}
			</ol>
		</section>
	);
};

export default FootnotesContainer;
