module.exports = {
	siteMetadata: {
		title: `Ben Myers`,
		author: `Ben Myers`,
		description: `Thoughts on development and accessibility.`,
		siteUrl: `https://benmyers.netlify.com/`,
		social: {
			linkedin: `BenDMyers`,
			twitter: `BenDMyers`
		}
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: ['Lato']
				}
			}
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`]
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/pages/posts`,
				name: `blog`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590
						}
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`
						}
					},
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`
				]
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				//trackingId: `ADD YOUR TRACKING ID HERE`,
			}
		},
		{
			resolve: 'gatsby-plugin-feed-generator',
			options: {
				generator: `GatsbyJS`,
				rss: true, // Set to false to stop rss generation
				json: true, // Set to false to stop json feed generation
				siteQuery: `
                    {
                        site {
                            siteMetadata {
                                title
                                description
                                siteUrl
                                author
                            }
                        }
                    }
                `,
				feeds: [
					{
						name: 'mdx-feed',
						query: `
                            {
                                allMdx(
                                sort: {order: DESC, fields: [frontmatter___date]},
                                limit: 100,
                                ) {
                                    edges {
                                        node {
                                            html
                                            frontmatter {
                                                date
                                                title
                                            }
                                        }
                                    }
                                }
                            }
                        `,
						normalize: ({query: {site, allMdx}}) => {
							return allMdx.edges.map((edge) => {
								return {
									title: edge.node.frontmatter.title,
									date: edge.node.frontmatter.date,
									url:
										site.siteMetadata.siteUrl +
										edge.node.slug,
									html: edge.node.html
								};
							});
						}
					}
				]
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Gatsby Starter Blog`,
				short_name: `GatsbyJS`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `content/assets/gatsby-icon.png`
			}
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`
			}
		}
	]
};
