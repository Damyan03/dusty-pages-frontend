import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BigCard from '../components/BigCard';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Search from '../components/Search';
import config from '../config.ts';

function Category() {
	const { categoryName } = useParams();

	interface FeaturedArticleType {
		id: number;
		title: string;
		titleLowerCase: string;
	}

	const [featuredArticles, setFeaturedArticles] = useState<FeaturedArticleType[]>([]);
	const [timeframe, _setTimeframe] = useState('all');

	async function getTopArticles(timeframe: string) {
		try {
			const res = await fetch(
				`${config.apiBaseUrl}/categories/${categoryName}/get-top-articles?timeframe=${timeframe}`,
			);
			if (!res.ok) throw new Error('Failed to fetch');
			const data = await res.json();
			setFeaturedArticles(data);
		} catch (err) {
			console.error(err);
		}
	}

	useEffect(() => {
		getTopArticles(timeframe);
	}, [timeframe]);

	return (
		<>
			<div className="full flex flex-col gap-2">
				<Search />
				<div className="flex items-center gap-2">
					<h2 className="text-2xl">Top Articles</h2>
					<Icon src="down-arrow" className="size-7" />
				</div>
				{featuredArticles.map((article: FeaturedArticleType) => (
					<BigCard type="wide" insideText={article.title} />
				))}
				<div className="flex justify-between">
					<div className="flex items-center gap-2">
						<h2 className="text-2xl">Random</h2>
						<Icon src="refresh" className="size-7" />
					</div>
					<Link to="/category/1/all-articles" className="flex items-center gap-2">
						<Button text="View all Articles" />
					</Link>
				</div>
				<BigCard type="small" />
				<BigCard type="small" />
				<BigCard type="small" />
				<BigCard type="small" />
				<BigCard type="small" />
			</div>
		</>
	);
}

export default Category;
