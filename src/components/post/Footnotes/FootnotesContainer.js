import React from 'react';
import { useHover } from 'use-hooks';
import { Anchor } from '../AnchoredHeadings';
import './footnotes.css';

const FootnotesContainer = ({ children }) => {
    const [ref, isHovered] = useHover();
    const footnotesHeading = (
        <h2 ref={ref} id="footnotes" className="footnotes-heading">
            <Anchor slug="footnotes" isHovered={isHovered} />
            Footnotes
		</h2>
    );

    return (
        <section aria-labelledby="footnotes" id="footnotes-container">
            {footnotesHeading}
            <ol>
                {React.Children.map(children, (fn, index) => (
                    <li id={`fn-${index + 1}`} key={`fn-${index + 1}`}>
                        {fn}
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default FootnotesContainer;
