import React from 'react';

interface BigCardProps {
	children?: React.ReactNode;
	title?: string;
	src?: string;
}

const BigCard: React.FC<BigCardProps> = ({ children, title, src }) => {
	return (
		<div className='full p-5 flex flex-col rounded-2xl'>
			{title && <h1>{title}</h1>}
			{src && (
				<div className="rounded-2xl overflow-hidden">
					<img className="object-cover" src={src} />
				</div>
			)}
			{children}
		</div>
	);
};

export default BigCard;