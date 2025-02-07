/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Image from 'gatsby-image';

import {rhythm} from '../../../utils/typography';
import './Bio.css';

/**
 * A brief blurb about the author.
 */
const Bio = (props) => {
	const data = useStaticQuery(graphql`
		query BioQuery {
			avatar: file(absolutePath: {regex: "/profile-pic.jpg/"}) {
				childImageSharp {
					fixed(width: 75, height: 75) {
						...GatsbyImageSharpFixed
					}
				}
			}
			site {
				siteMetadata {
					author
					social {
						linkedin
						twitter
					}
				}
			}
		}
	`);

	const {author, social} = data.site.siteMetadata;
	return (
		<div className={`bio ${props.className}`}>
			<Image
				fixed={data.avatar.childImageSharp.fixed}
				alt={author}
				id="bio-avatar"
				style={{
					marginRight: rhythm(1 / 2),
					marginBottom: 0,
					minWidth: 75,
					borderRadius: `100%`
				}}
				imgStyle={{
					borderRadius: `50%`
				}}
			/>
			<p>
				<strong>{author}</strong> is a human T-rex, software developer,
				accessibility advocate, and a passionate educator. He graduated
				from Oklahoma State University in 2018 with a bachelor's degree
				in Computer Science, and now works for USAA as a full-stack
				engineer.
				{` `}
				<a href={`https://benmyers.dev`}>Check out his portfolio</a>
				{' and '}
				<a href={`https://linkedin.com/in/${social.linkedin}`}>
					connect with him on LinkedIn
				</a>
				.
			</p>
		</div>
	);
};

export default Bio;
