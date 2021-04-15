import React from 'react';
import purple from '../assets/purple.jpg';

export const Home = () => {
	return (
		<div>
			<main>
				<img
					src={purple}
					alt='Freedom From thoughts'
					className='absolute h-full'
					width='100%'
				/>
				<section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8  '>
					<h1 className=' text-red-100 font-bold cursive leading-none lg-leading-snug  home-name'>
						Hey Species!
						<br />
						Pranavi here!{' '}
					</h1>
				</section>
			</main>{' '}
		</div>
	);
};
export default Home;
