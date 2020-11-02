import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Prism from 'prismjs';
import React, { useEffect } from 'react';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-python.min.js';

export default function Layout({
	children,
	pageTitle,
	pageDescription,
	...props
}) {
	useEffect(() => {
		Prism.highlightAll();
	}, []);
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, intial-scale=1' />
				<title>{pageTitle}</title>
				<meta name='description' content={pageDescription}></meta>
				<link rel='shortcut icon' href='/favicon.png' />
			</Head>
			<section className='layout'>
				<Header />
				<div className='content'>{children}</div>
				<Footer />
			</section>

			<style jsx global>{`
				@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap');
				@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700;900&display=swap');
				html,
				body {
					margin: 0px;
					padding: 0px;
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
					--yellow: #ffcd30;
				}
			`}</style>
			<style jsx>{`
				.layout {
					display: flex;
					flex-direction: column;
					position: relative;
					min-height: 100vh;
					padding-bottom: 50px;
				}
				.content {
					display: flex;
					flex-direction: column;
					align-items: center;
					max-width: 800px;
					margin: auto;
					padding: 2rem;
					font-size: 2rem;
					min-height: 100%;
					flex-grow: 1;
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
