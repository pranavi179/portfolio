import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import purple from '../assets/purple.jpg';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}
export const About = () => {
	const [author, setAuthor] = useState(null);
	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == 'author']{
			name,
			bio,
			"authorImage":image.asset->url
		}`
			)
			.then((data) => setAuthor(data[0]))
			.catch(console.error);
	}, []);
	if (!author) return <div>Loading....</div>;

	return (
		<div>
			<main className='relative'>
				<img src={purple} alt='purple image' className='absolute w-full ' />
				<div className='p-10 lg:pt-48 container mx-auto relative'>
					<section className='bg-900 rounded-lg shadow-2xl lg:flex p-20 '>
						<img
							src={urlFor(author.authorImage).url()}
							className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8 '
							alt={author.name}
						/>
						<div className='text-lg flex flex-col justify-center'>
							<h1 className='cursive text-6xl text-red-300 mb-4 '>
								Hey Species !!{' '}
								<span className='text-green-100'>{author.name} Here </span>
							</h1>
							<div className='prose lg:prose-xl text-white '>
								{' '}
								<BlockContent
									blocks={author.bio}
									projectId='ur3337id'
									dataset='production'
								/>
							</div>
						</div>
					</section>
				</div>
			</main>{' '}
		</div>
	);
};
export default About;
