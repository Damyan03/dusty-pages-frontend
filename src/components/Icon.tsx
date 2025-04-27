import React from 'react';

import menu from '../assets/icons/menu.svg';

const iconMap: { [key: string]: string } = {
	menu,
};

interface IconProps {
	src: keyof typeof iconMap;
	className?: string;
}

const Icon: React.FC<IconProps> = ({ src, className }) => {
	const iconSrc = iconMap[src];

	if (!iconSrc) {
		return <span>Icon not found</span>;
	}

	return <img src={iconSrc} className={className} />;
};

export default Icon;
