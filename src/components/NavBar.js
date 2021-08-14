import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
	return (
		<div>
			<header className='bg-white-100 '>
				<div className='container  flex justify-between'>
					<nav className='flex'>
						<NavLink
							to='/'
							exact
							activeClassName='text-white'
							className='inflex-flex items-center py-9 px-2 mr-2 text-purple-800 hover:text-black-800 text-3xl  font-bold cursive tracking-widest '
						>
							Pranavi
						</NavLink>
						<NavLink
							to='/post'
							activeClassName='text-white-100 bg-purple-100'
							className='inflex-flex items-center py-3 px-2 my-6 rounded text-red-700 hover:text-green-800 text-2xl '
						>
							Post
						</NavLink>
						<NavLink
							to='/project'
							activeClassName='text-white-100 bg-purple-100'
							className='inflex-flex items-center py-3 px-2 my-6 rounded text-red-700 hover:text-green-800 text-2xl '
						>
							Project
						</NavLink>
						<NavLink
							to='/about'
							activeClassName='text-white-100 bg-purple-100'
							className='inflex-flex items-center py-3 px-2 my-6 rounded text-red-700 hover:text-green-800 text-2xl '
						>
							About Me!
						</NavLink>
					</nav>
				</div>
			</header>
		</div>
	);
};
export default NavBar;
