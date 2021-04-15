import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export const NavBar = () => {
	return (
		<div>
			<header className='bg-white-600'>
				<div className='container mx-auto flex justify-between'>
					<nav className='flex'>
						<NavLink
							to='/'
							exact
							activeClassName='text-white'
							className='inflex-flex items-center py-6 px-3 mr-4 text-red-800 hover:text-purple-800 text-7xl  font-bold cursive tracking-widest '
						>
							Pranavi
						</NavLink>
						<NavLink
							to='/post'
							activeClassName='text-white-100 bg-purple-100'
							className='inflex-flex items-center py-3 px-3 my-6 rounded text-red-700 hover:text-green-800 text-2xl font-bold'
						>
							Post
						</NavLink>
						<NavLink
							to='/project'
							activeClassName='text-white-100 bg-purple-100'
							className='inflex-flex items-center py-3 px-3 my-6 rounded text-red-700 hover:text-green-800 text-2xl font-bold'
						>
							Project
						</NavLink>
						<NavLink
							to='/about'
							activeClassName='text-white-100 bg-purple-100'
							className='inflex-flex items-center py-3 px-3 my-6 rounded text-red-700 hover:text-green-800 text-2xl font-bold'
						>
							About Me!
						</NavLink>
					</nav>
					<div className='inline-flex py-3 px-3 my-6'>
						<SocialIcon
							url='https://www.linkedin.com/in/pranavi-p/'
							className='mr-4'
							target='_blank'
							fgcolor='#fff'
							style={{ height: 35, width: 35 }}
						/>
						<SocialIcon
							url='https://github.com/pranavi179'
							className='mr-4'
							target='_blank'
							fgcolor='#fff'
							style={{ height: 35, width: 35 }}
						/>
						<SocialIcon
							url='https://www.upwork.com/freelancers/~01564e8116e5c8c5b9'
							className='mr-4'
							target='_blank'
							fgcolor='#fff'
							style={{ height: 35, width: 35 }}
						/>

						<SocialIcon
							url='https://mail.google.com/mail/u/0/?ogbl#inbox?compose=new'
							className='mr-4'
							target='_blank'
							fgcolor='white'
							style={{ height: 35, width: 35, content: 'Gmail' }}
						/>
					</div>
				</div>
			</header>
		</div>
	);
};
export default NavBar;
