module.exports = {
	siteMetadata: {
		title: `Ben Myers`,
		author: `Ben Myers`,
		description: `Thoughts on development and accessibility.`,
		siteUrl: `https://blog.benmyers.dev/`,
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
                    families: ['Lato', 'Roboto Slab:400,700,900', 'Oxygen Mono:400,400i,700']
				}
			}
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-footnotes`,
						options: {
							footnoteBackRefPreviousElementDisplay: 'inline',
							footnoteBackRefDisplay: 'inline'
						}
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							backgroundColor: 'none',
							showCaptions: ['title']
						}
                    },
                    {
                        resolve: "@weknow/gatsby-remark-codepen",
                        options: {
                            theme: "dark",
                            height: 400
                        }
                    }
				]
			}
        },
        `gatsby-plugin-remove-serviceworker`,
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
							backgroundColor: 'none',
							showCaptions: ['title']
						}
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`
						}
                    },
                    {
                        resolve: "@weknow/gatsby-remark-codepen",
                        options: {
                            theme: "dark",
                            height: 400
                        }
                    },
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
		`gatsby-plugin-sitemap`,
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
						name: 'feed',
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
                                                description
                                                cover
                                            }
                                            fields {
                                                slug
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
										edge.node.fields.slug,
									html: edge.node.html,
									excerpt: edge.node.frontmatter.description,
									bannerImage: edge.node.frontmatter.cover
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
				name: `Blog | Ben Myers`,
				short_name: `Ben Myers`,
				start_url: `/`,
				background_color: `#f0f0f0`,
				theme_color: `#f31455`,
				display: `minimal-ui`,
				icon: `content/assets/logo.png`
			}
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`
			}
		},
		`gatsby-plugin-use-dark-mode`
	]
};
