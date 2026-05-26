import React from 'react';

interface ArticleListProps {
	data: Article[];
}

interface Article {
	id: number;
	title: string;
	body: string;
	author: string;
	date: string;
	contentDate: string;
	tags: string[];
}

const ArticleList: React.FC<ArticleListProps> = ({ data }) => {
	const articles = Array.isArray(data) ? data : [];

	return (
		<table className="table-auto w-full border-2 border-sub rounded-xl">
			<tbody>
				{articles.map((article) => (
					<tr className="border-b-2 border-sub" key={article.id}>
						<th className="w-1/10 border-r-2 border-sub">{article.id}</th>
						<td className="pl-2">{article.title}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default ArticleList;
