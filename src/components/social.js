import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Social() {
	return (
		<div>
			<div className='flex justify-center mb-12'>
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
					url='https://twitter.com/pranavi9228?lang=en'
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
					style={{ height: 35, width: 35, content: 'Upwork' }}
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
	);
}

export default Social;
