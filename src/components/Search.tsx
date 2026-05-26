import React from 'react';
import Icon from './Icon';

interface SearchProps {}

const Search: React.FC<SearchProps> = ({}) => {
	return (
		<div className="h-9 border-2 rounded-xl border-sub flex">
			<div className="center w-1/6 bg-sub rounded-xl">
				<Icon src="filter" className="h-8" />
			</div>
			<input className="flex-grow px-2 mr-1" type="text" placeholder="Search..." />
			<div className="center w-1/6 bg-sub rounded-xl">
				<Icon src="search" className="h-8" />
			</div>
		</div>
	);
};

export default Search;
