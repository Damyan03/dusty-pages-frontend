import React from 'react';

interface BigCardProps {
	title?: string;
	src?: string;
	description?: string;
	insideText?: string;
	type?: 'wide' | 'small' | 'tiny';
}

const BigCard: React.FC<BigCardProps> = ({ title, src, description, insideText, type }) => {
	let cardHeight;
	switch (type) {
		case 'wide':
			cardHeight = 'h-44';
			break;
		case 'small':
			cardHeight = 'h-24';
			break;
		case 'tiny':
			cardHeight = 'h-12';
			break;
		default:
			cardHeight = 'h-48';
	}

	return (
		<div className="flex flex-col gap-2">
			{title && <h2 className="text-xl">{title}</h2>}

			<div className={`relative ${cardHeight}`}>
				{!src ? (
					<div className="full bg-sub rounded-2xl flex items-center justify-center text-txt-secondary text-center px-4">
						{insideText || "No image available"}
					</div>
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