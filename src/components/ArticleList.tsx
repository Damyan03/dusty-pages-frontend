import React from 'react';

interface ArticleListProps {
}

const ArticleList: React.FC<ArticleListProps> = ({}) => {
	return (
		<table className="table-auto w-full border-2 border-sub rounded-xl">
			{[...Array(10)].map((_, i) => (
				<tr className="border-b-2 border-sub" key={i}>
					<th className="w-1/10 border-r-2 border-sub">#</th>
					<td className="pl-2">This is a test title</td>
				</tr>
			))}
		</table>
	)
};

export default ArticleList;