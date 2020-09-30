import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Prism from 'prismjs';
import React, { useEffect } from 'react';
import 'prismjs/components/prism-jsx.min';

export default function Layout({ children, pageTitle, ...props }) {
	useEffect(() => {
		Prism.highlightAll();
	}, []);
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, intial-scale=1' />
				<title>{pageTitle}</title>
			</Head>
			<section className='layout'>
				<Header />
				<div className='content'>{children}</div>
				
			</section>
			<Footer />
			<style jsx global>{`
				@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap');
				@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700;900&display=swap');
				html,
				body {
					margin: 0;
					padding: 0;
					font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont,
						'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue',
						sans-serif;
					color: #445566;
					font-size: 10px;
				}
				:root {
					--text: #505050;
					--green: #80e5a6;
					--blue: #84d9ff;
					--red: #c62121;
				}
			`}</style>
			<style jsx>{`
				.layout {
					padding: 2rem;
					display:flex;
					flex-direction:column;
				}
				.content {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					max-width: 800px;
					margin: auto;
					padding: 2rem;
					font-size: 2rem;
					min-height:100%;
					flex-grow:1;
				}
				@media only screen and (max-width: 600px) {
					.layout,
					.content {
						padding: 1rem;
					}
				}
			`}</style>
		</>
	);
}
