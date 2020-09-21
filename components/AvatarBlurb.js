import Link from 'next/link';

export default function AvatarBlurb() {
	return (
		<div className='container'>
			<img
				src='https://res.cloudinary.com/dsjhcek2q/image/upload/v1600684556/blog/avatar_hmvcqi.png'
				alt='cartoon of man behind laptop'
			/>
			<p>
				Welcome to Tim’s Development Garden. A place to write articles about
				what I am learning and a place to keep and grow my code snippets.
			</p>
			<style jsx>{`
				.container {
					max-width: 800px;
					margin: 5rem auto;
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
				p {
					font-size: 1.6rem;
					margin-left: 3rem;
					line-height: 1.5;
				}
				@media only screen and (max-width: 500px) {
					.container {
						flex-direction: column;
						text-align: center;
					}
					img {
						width: 8rem;
					}
				}
			`}</style>
		</div>
	);
}
