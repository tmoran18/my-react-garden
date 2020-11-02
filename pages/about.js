import Layout from '../components/Layout';

const About = ({ title, description, ...props }) => {
	return (
		<>
			<Layout pageTitle={`${title} | About`} description={description}>
				<h1 className='title center'>Welcome to my blog!</h1>

				<p className='description center'>{description}</p>

				<p className='center'>
					If you have anything you would like to point out, correct, discuss or
					give me general feedback, head over to{' '}
					<a href='https://tim-moran.com/'>My Portfolio</a> and get in touch.
					You can also find me on{' '}
					<a href='https://twitter.com/Tim__Moran'>twitter here</a>
				</p>
				<style jsx>{`
					.center {
						text-align: center;
						line-height: 1.5;
					}
				`}</style>
			</Layout>
		</>
	);
};

export default About;

export async function getStaticProps() {
	const configData = await import(`../siteconfig.json`);

	return {
		props: {
			title: configData.default.title,
			description: configData.default.description,
		},
	};
}
