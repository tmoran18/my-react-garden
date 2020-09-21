import Link from 'next/link';

export default function PostListCard({
	tag,
	title,
	datePub,
	blurb,
	color,
	slug,
}) {
	return (
		<div className='container'>
			<h2 className={`${color}_txt`}>{title}</h2>
			<div>
				<span className={`tag ${color}_bg`}>{tag}</span>
				<span className='date_published'>{datePub}</span>
			</div>
			<p className='blurb'>{blurb}</p>
			<style jsx>{`
				.container {
					box-shadow: 7px 7px 0px #80e5a6;
					padding: 0rem 2rem;
					border: 1px solid #80e5a6;
					margin: 2rem 0;
				}
				h2,
				.tag {
					font-family: 'Quicksand', sans-serif;
				}
				.tag {
					color: white;
					font-size: 2rem;
					font-weight: 700;
					padding: 5px 20px;
					border-radius: 150px;
				}
				.blue_bg {
					background: var(--secondary);
				}
				.blue_txt {
					color: var(--secondary);
				}
				.green_bg {
					background: var(--primary);
				}
				.green_txt {
					color: var(--primary);
				}
			`}</style>
		</div>
	);
}
