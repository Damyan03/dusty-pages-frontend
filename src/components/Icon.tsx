import React from 'react';

import menu from '../assets/icons/menu.svg';
import leftArrow from '../assets/icons/left-arrow.svg';
import downArrow from '../assets/icons/down-arrow.svg';
import refresh from '../assets/icons/refresh.svg';
import search from '../assets/icons/search.svg';
import filter from '../assets/icons/filter.svg';

const iconMap: { [key: string]: string } = {
	menu,
	'left-arrow': leftArrow,
	'down-arrow': downArrow,
	refresh,
	search,
	filter,
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
