import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ArticleList from '../components/ArticleList';
import config from '../config.ts';
import { useEffect, useState } from 'react';

type Article = {
	id: number;
	title: string;
	body: string;
	author: string;
	date: string;
	contentDate: string;
	tags: string[];
};

async function getAllArticles() {
	const res = await fetch(`${config.apiBaseUrl}/articles/get-all`);
	if (!res.ok) throw new Error('Failed to fetch');
	const data = await res.json();
	return data;
}

function AllArticles() {
	const [articles, setArticles] = useState<Article[]>([]);

	useEffect(() => {
		const loadArticles = async () => {
			const allArticles = await getAllArticles();
			setArticles(allArticles);
		};

		void loadArticles();
	}, []);

	return (
		<>
			<div className="full flex flex-col gap-2">
				<h2 className="text-xl">Category Title - All Articles</h2>
				<ArticleList data={articles} />
				<div className="center mt-5">
					<Link to="/">
						<Button text="Back to home" />
					</Link>
				</div>
			</div>
		</>
	);
}

export default AllArticles;
