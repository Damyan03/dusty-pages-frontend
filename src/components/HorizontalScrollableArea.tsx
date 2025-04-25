import React from 'react';

interface HorizontalScrollableAreaProps {
	children: React.ReactNode;
	title?: string;
}

const HorizontalScrollableArea: React.FC<HorizontalScrollableAreaProps> = ({ children, title}) => {
	return (
		<div className='full p-5 pr-0'>
			{title && <h3 className=''>{title}</h3>}
			<div className='w-full flex gap-2 overflow-x-auto'>
				{children}
			</div>
		</div>
	);
};

export default HorizontalScrollableArea;