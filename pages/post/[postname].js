import Link from 'next/link';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
	if (!frontmatter) return <></>;
	const [cardColor, setCardColor] = useState('');
	const getCardColor = (color) => {
		if (color == 'blue') {
			setCardColor('var(--blue);');
		} else if (color == 'green') {
			setCardColor('var(--green);');
		} else if (color == 'red') {
			setCardColor('var(--red);');
		} else if (color == 'yellow') {
			setCardColor('var(--yellow)');
		} else {
			setCardColor('var(--green);');
		}
	};

	useEffect(() => {
		getCardColor(frontmatter.color);
	}, ['LOL']);

	return (
		<Layout
			pageTitle={`${siteTitle} | ${frontmatter.title}`}
			pageDescription={frontmatter.blurb}>
			<Link href='/'>
				<a>Back to post list</a>
			</Link>
			<article>
				<h1>{frontmatter.title}</h1>
				<p>
					<span className='tag'>{frontmatter.tag}</span>
					<span className='date_published'>{frontmatter.datePub}</span>
				</p>
				<br></br>
				<div>
					<ReactMarkdown escapeHtml={false} source={markdownBody} />
				</div>
			</article>
			<style jsx>{`
				h1 {
					font-size: 4rem;
				}
				.tag {
					color: white;
					font-size: 2rem;
					font-weight: 700;
					padding: 5px 20px;
					border-radius: 150px;
					margin-right: 2rem;
					background-color: ${cardColor};
				}
				.date_published {
					font-size: 1.2rem;
				}
			`}</style>
		</Layout>
	);
}

export async function getStaticProps({ ...ctx }) {
	const { postname } = ctx.params;

	const content = await import(`../../posts/${postname}.md`);
	const config = await import(`../../siteconfig.json`);
	const data = matter(content.default);

	return {
		props: {
			siteTitle: config.title,
			frontmatter: data.data,
			markdownBody: data.content,
		},
	};
}

export async function getStaticPaths() {
	const blogSlugs = ((context) => {
		const keys = context.keys();
		const data = keys.map((key, index) => {
			let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);

			return slug;
		});
		return data;
	})(require.context('../../posts', true, /\.md$/));

	const paths = blogSlugs.map((slug) => `/post/${slug}`);

	return {
		paths,
		fallback: false,
	};
}
