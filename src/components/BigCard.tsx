import React from 'react';

interface BigCardProps {
	title?: string;
	src?: string;
	description?: string;
	type?: 'wide' | 'small';
}

const BigCard: React.FC<BigCardProps> = ({ title, src, description, type }) => {
	const cardHeight = type === 'wide' ? 'h-44' : type === 'small' ? 'h-24' : 'h-48';

	return (
		<div className="flex flex-col gap-2">
			{title && <h2 className="text-xl">{title}</h2>}

			<div className={`relative ${cardHeight}`}>
				{!src ? (
					<div className="full bg-sub rounded-2xl" />
				) : (
					<img
						className="full object-cover rounded-2xl"
						src={src}
					/>
				)}
			</div>

			{description && <p className="text-txt-secondary">{description}</p>}
		</div>
	);
};

export default BigCard;