import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function PostListCard({
	tag,
	title,
	datePub,
	blurb,
	color,
	slug,
}) {
	const [cardColor, setCardColor] = useState('');

	const getCardColor = (color) => {
		if (color == 'blue') {
			setCardColor('var(--blue);');
		} else if (color == 'green') {
			setCardColor('var(--green);');
		} else if (color == 'red') {
			setCardColor('var(--red);');
		} else {
			setCardColor('var(--green);');
		}
	};

	useEffect(() => {
		getCardColor(color);
	}, ['LOL']);

	return (
		<div className='container'>
			<h2>{title}</h2>
			<div>
				<span className='tag'>{tag}</span>
				<span className='date_published'>{datePub}</span>
			</div>
			<p className='blurb'>{blurb}</p>
			<style jsx>{`
				.container {
					padding: 0rem 2rem;
					margin: 2rem 0;
					border: 1px solid ${cardColor};
					box-shadow: 7px 7px 0px ${cardColor};
				}
				h2 {
					color: ${cardColor};
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
					margin-right: 2rem;
					background-color: ${cardColor};
				}
				.date_published {
					font-size: 1.2rem;
				}
				.blurb {
					line-height: 1.5;
					color: var(--text);
				}
			`}</style>
		</div>
	);
}
