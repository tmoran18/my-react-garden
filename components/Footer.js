import Link from 'next/link';

export default function Footer() {
	return (
		<>
			<footer>Footer</footer>
			<style jsx>
				{`
					footer {
						position: absolute;
						left: 0;
						bottom: 0;
						right: 0;
						background-color: #80e5a6;
						color: white;
						text-align: center;
						height: 50px;
					}
				`}
			</style>
		</>
	);
}
