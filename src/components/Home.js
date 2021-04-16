import React from 'react';
// import purple from '../assets/purple.jpg';
import Social from './social';

export const Home = () => {
	return (
		<div>
			<main className='g-local md:bg-fixed p-2'>
				{/* <img
					src={white}
					alt='Freedom From thoughts'
					className='absolute object-cover'
					style={{ width: '100%', height: '100%' }}
				/> */}
				<section className='relative grid justify-center min-h-screen pt-12 lg:pt-64 px-8  '>
					<h1 className=' text-red-500  cursive leading-none lg:leading-snug  home-name'>
						In Planet Earth
					</h1>
					<br />
					<Social />

					{/* <div className='inline-flex py-3 px-2 my-6'> */}
				</section>
			</main>{' '}
		</div>
	);
};
export default Home;
