import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
// import { Link } from 'react-router-dom';
export const Project = () => {
	const [projectData, setProjectData] = useState(null);
	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type=="project"]{
			title,
			date,place,description,projectType,link,tags
			
		}`
			)
			.then((data) => setProjectData(data))
			.catch(console.error);
	}, []);
	return (
		<div>
			<main className='bg-white-100 min-h-screen p-12'>
				<section className='container mx-auto'>
					<h1 className='text-5xl flex justify-center cursive'>Project Page</h1>
					<h2 className='text-lg text-gray-600 flex justify-center mb-12'>
						Welcome to my page of Projects posts
					</h2>
					<section className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{projectData &&
							projectData.map((project, index) => (
								<article className='relative rounded-lg bg-purple-100 shadow-xl bg-white p-16'>
									<h3 className='text-gray-800 text-4xl font-bold mb-2 hover:text-red-700'>
										<a
											href={project.link}
											alt={project.title}
											target='_blank'
											rel='noopener noreferrer'
										>
											{project.title}
										</a>
									</h3>
									<div className='text-gray-500 text-xs space-x-2'>
										<span>
											<strong className='font-bold'>Finished On </strong>:{' '}
											{new Date(project.date).toLocaleDateString()}
										</span>
										<span>
											<strong className='font-bold'>Company </strong>:{' '}
											{project.place}
										</span>
										<span>
											<strong className='font-bold'>Type </strong>:{' '}
											{project.projectType}
										</span>
										<p className='my-6 text-lg text-gray-700 leading-relaxed '>
											{project.description}
										</p>
										<a
											href={project.link}
											alt={project.title}
											target='_blank'
											rel='noopener noreferrer'
											className='text-red-500 font-bold hover:underline hover:text-red-400  text-xl '
										>
											View The project{' '}
											<span role='img' aria-label='right pointer'>
												{/* window+period = emoji in vs code   */}
												????
											</span>
										</a>
									</div>
								</article>
							))}
					</section>
				</section>{' '}
			</main>
		</div>
	);
};
export default Project;
