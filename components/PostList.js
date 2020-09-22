import Link from 'next/link';

import PostListCard from './PostListCard';

export default function PostList({ posts }) {
	if (posts === 'undefined') return null;

	return (
		<div>
			{!posts && <div>No posts!</div>}
			<ul>
				{posts &&
					posts.map((post, index) => {
						return (
							<Link key={index} href={{ pathname: `/post/${post.slug}` }}>
								<a>
									<PostListCard {...post.frontmatter} />
								</a>
							</Link>
						);
					})}
			</ul>
			<style jsx>{`
				a {
					text-decoration: none;
				}
				ul {
					padding: 0px;
				}
			`}</style>
		</div>
	);
}
