import React from 'react';
import { Link } from 'react-router-dom';

interface UserProfileProps {
	toggleMenu?: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ toggleMenu }) => (
	<section className="flex flex-col items-center justify-center py-6">
		<Link to="/profile" onClick={toggleMenu}>
			<figure className="w-32 h-32 rounded-full bg-sub mb-3" />
		</Link>
		<figcaption className="text-center">
			<h2 className="text-xl font-semibold">User Name</h2>
			<p className="text-txt-secondary">@username</p>
		</figcaption>
	</section>
);

export default UserProfile;
