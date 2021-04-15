import React from 'react';
import image from '../assets/image.jpg';
export const Home = () => {
	return (
		<div>
			<main>
				<img
					src={image}
					alt='Freedom From thoughts'
					className='absolute h-full'
					width='100%'
				/>
				<section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8  '>
					<h1 className='text-6xl text-red-100 font-bold cursive leading-none lg-leading-snug  home-name'>
						Pranavi here!{' '}
					</h1>
				</section>
			</main>{' '}
		</div>
	);
};
export default Home;
