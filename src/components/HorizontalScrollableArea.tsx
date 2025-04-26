import React from 'react';

interface HorizontalScrollableAreaProps {
	children: React.ReactNode;
	title?: string;
}

const HorizontalScrollableArea: React.FC<HorizontalScrollableAreaProps> = ({ children, title}) => {
	return (
		<div className='full py-5'>
			{title && <h3 className='pl-5'>{title}</h3>}
			<div className='w-full flex gap-2 overflow-x-auto'>
				{children}
			</div>
		</div>
	);
};

export default HorizontalScrollableArea;