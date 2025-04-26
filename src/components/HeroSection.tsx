import React from 'react';

interface HeroSectionProps {
	title?: string;
	src?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({title, src}) => {
	return (
		<div className='w-full relative'>
			<div className='full absolute bg-gradient-to-t from-dark to-75%'></div>
			<img className="full min-h-68 max-h-screen object-cover" src={src}></img>
			{title && <h1 className='absolute w-full text-center bottom-1/12 text-txt-primary text-2xl'>{title}</h1>}
		</div>
	);
};

export default HeroSection;