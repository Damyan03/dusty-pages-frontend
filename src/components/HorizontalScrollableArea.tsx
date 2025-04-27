import React from 'react';

interface HorizontalScrollableAreaProps {
	children: React.ReactNode;
	title?: string;
}

const HorizontalScrollableArea: React.FC<HorizontalScrollableAreaProps> = ({ children, title}) => {
	return (
		<div className='flex flex-col gap-2 '>
			{title && <h3 className='text-xl'>{title}</h3>}
			<div className='-mx-5 px-5 flex gap-2 overflow-x-auto'>
				{children}
			</div>
		</div>
	);
};

export default HorizontalScrollableArea;