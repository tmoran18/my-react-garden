import Link from 'next/link';

export default function Header() {
	return (
		<>
			<header className='header'>
				<nav className='nav'>
					<div>
						<Link href='/'>
							<a>
								<img
									src='https://res.cloudinary.com/dsjhcek2q/image/upload/v1600680116/blog/garden_logo_qzmmvx.png'
									alt=''
								/>
							</a>
						</Link>
					</div>
					<div>
						<Link href='/about'>
							<a>about</a>
						</Link>
						<Link href='/'>
							<a>posts</a>
						</Link>
					</div>
				</nav>
			</header>
			<style jsx>{`
				.header {
					min-height: 70px;
					width: 100%;
				}
				nav {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 1rem;
					max-width: 1260px;
					margin: 0 auto;
				}
				nav a {
					font-size: 1.8rem;
					color: var(--text);
					padding: 1rem;
					text-decoration: none;
					text-align: center;
					transition: all ease 0.2s;
				}
				nav a:hover {
					color: var(--primary);
					font-weight: 500;
					text-decoration: underline;
				}
				p {
					color: blue;
				}
				@media only screen and (max-width: 750px) {
					img {
						width: 60vw;
					}
				}
			`}</style>
		</>
	);
}
