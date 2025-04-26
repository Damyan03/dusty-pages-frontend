import React from 'react';

interface BigCardProps {
	title?: string;
	src?: string;
	description?: string;
}

const BigCard: React.FC<BigCardProps> = ({ title, src, description }) => {
	return (
		<div className='full p-5 flex flex-col rounded-2xl'>
			{title && <h1>{title}</h1>}
			<div className="overflow-hidden">
				<img className="rounded-2xl object-cover" src={src} />
			</div>
			{description && <p className='text-txt-secondary'>{description}</p>}
		</div>
	);
};

export default BigCard;