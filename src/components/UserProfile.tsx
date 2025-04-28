import React from 'react';

const UserProfile: React.FC = () => (
	<section className="flex flex-col items-center justify-center py-6">
		<figure className="w-32 h-32 rounded-full bg-sub mb-3" />
		<figcaption className="text-center">
			<h2 className="text-xl font-semibold">User Name</h2>
			<p className="text-txt-secondary">@username</p>
		</figcaption>
	</section>
);

export default UserProfile;