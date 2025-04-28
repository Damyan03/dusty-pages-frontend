import React from 'react';
import Icon from './Icon';
import UserProfile from './UserProfile';
import { Link } from 'react-router-dom';

interface SideMenuProps {
	toggleMenu: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({toggleMenu}) => {
	return (
		<div className='h-full w-5/6 bg-main fixed z-10'>
			<div className='h-20 w-20 p-5 absolute bg-main rounded-full top-9 -right-9' onClick={toggleMenu}>
				<Icon src="left-arrow"/>
			</div>
			<div className='full flex flex-col mt-10'>
				<UserProfile />
				<div className='center flex-col gap-5 text-xl'>
					<Link to="/">Home</Link>
					<h3 className='text-sub'>Bookmarks</h3>
					<Link to="/about">About</Link>
					<Link to="/contact">Contact</Link>
				</div>
			</div>
		</div>
	);
};

export default SideMenu;