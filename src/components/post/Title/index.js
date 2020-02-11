import React from 'react';
import moment from 'moment';
import { rhythm } from '../../../utils/typography';
import cover from './cover';

import './PostHeader.css';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

/**
 * The post title, superimposed on an image.
 */
const PostHeader = (props) => {
    const data = useStaticQuery(graphql`
		query HeaderQuery {
			avatar: file(absolutePath: {regex: "/profile-pic.jpg/"}) {
				childImageSharp {
					fixed(width: 44, height: 44) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
    `);

    let avatar = (
        <Image
            fixed={data.avatar.childImageSharp.fixed}
            aria-hidden="true"
            alt="Ben"
            className="header-avatar"
            imgStyle={{
                borderRadius: `50%`,
                border: '3px solid #cccccc'
            }}
        />
    );
    
    return (
        <header {...cover(props.cover)}>
            <h1 style={{ marginTop: rhythm(1), marginBottom: 0, color: 'white' }}>
                {props.title}
            </h1>
            <p className="post-header-date">
                <time itemProp="datePublished" dateTime={props.date}>
                    {moment(props.date).format('LL')}
                </time>
                &nbsp;&middot;&nbsp;
                <Link to="/">{avatar} <span className="name">Ben Myers</span></Link>
            </p>
        </header>
    );
};

export default PostHeader;