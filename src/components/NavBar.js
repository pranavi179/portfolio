import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import EmailIcon from '@material-ui/icons/Email';
import WorkIcon from '@material-ui/icons/Work';
export const NavBar = () => {
	return (
		<div>
			<header className='bg-red-600'>
				<div className='container mx-auto flex justify-between'>
					<nav className='flex'>
						<NavLink
							to='/'
							exact
							activeClassName='text-white'
							className='inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl  font-bold cursive tracking-widest '
						>
							Pranavi
						</NavLink>
						<NavLink
							to='/post'
							activeClassName='text-red-100 bg-red-700'
							className='inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 text-2xl font-bold'
						>
							Post
						</NavLink>
						<NavLink
							to='/project'
							activeClassName='text-red-100 bg-red-700'
							className='inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 text-2xl font-bold'
						>
							Project
						</NavLink>
						<NavLink
							to='/about'
							activeClassName='text-red-100 bg-red-700'
							className='inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 text-2xl font-bold'
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
						<WorkIcon
							url='https://www.upwork.com/freelancers/~01564e8116e5c8c5b9'
							className='mr-4'
							target='_blank'
							fgcolor='#fff'
							style={{ height: 35, width: 35 }}
							text='Upwork'
						/>

						<EmailIcon
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
