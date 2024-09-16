import { useState, useEffect } from "react"

import Recent from '../../components/sections/articles/recent'

import Color from '../../components/utils/page.colors.util'

import colors from '../../content/articles/_colors.json'
import settings from '../../content/_settings.json'

import { parse } from 'rss-to-json'

export default function Articles({ mediumFeed }) {
	return (
		<>
			<Color colors={colors} />
			<Recent mediumFeed={mediumFeed} />
		</>
	)
}

export async function getServerSideProps({ res }) {
	res.setHeader(
		'Cache-Control',
		'public, s-maxage=600, stale-while-revalidate=59'
	);

	try {
		const rawFeed = await parse(`https://medium.com/feed/${settings.username.medium}`);

		// Function to sanitize an article object
		const sanitizeArticle = (article) => ({
			id: article.id || null,
			title: article.title || '',
			description: article.description || '',
			author: article.author || '',
			link: article.link || '',
			published: article.published || null,
			created: article.created || null,
			category: article.category || [],
			content: article.content || '',
			enclosures: article.enclosures || []
		});

		// Sanitize the feed data
		const sanitizedFeed = {
			title: rawFeed.title || '',
			description: rawFeed.description || '',
			link: rawFeed.link || '',
			image: rawFeed.image || '',
			category: rawFeed.category || [],
			items: (rawFeed.items || []).map(sanitizeArticle)
		};

		return { props: { mediumFeed: sanitizedFeed } };
	} catch (error) {
		console.error('Error fetching RSS feed:', error);
		return { props: { mediumArticles: { items: [], feed: {} } } };
	}
}