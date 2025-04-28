import React from 'react';

interface SearchProps {
}

const Search: React.FC<SearchProps> = ({}) => {

	return (
		<div className="h-9 border-2 rounded-xl border-sub flex">
			<div className='center w-1/6 bg-sub rounded-xl'>
				A
			</div>
			<div className='flex-grow'></div>
			<div className='center w-1/6 bg-sub rounded-xl'>
				X
			</div>
		</div>
	);
};

export default Search;