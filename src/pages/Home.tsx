import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BigCard from "../components/BigCard";
import HorizontalScrollableArea from "../components/HorizontalScrollableArea";
import config from "../config.ts";

function Home() {
	interface CategoryType {
		id: number;
		name: string;
	}

	interface FeaturedArticleType {
		id: number;
		title: string;
		titleLowerCase: string;
	}

	const [categories, setCategories] = useState<CategoryType[]>([]);
	const [featuredArticles, setFeaturedArticles] = useState<FeaturedArticleType[]>([]);

	async function getCategories() {
		const res = await fetch(`${config.apiBaseUrl}/categories/get-categories`);
		if (!res.ok) throw new Error("Failed to fetch categories");
		const data = await res.json();
		setCategories(data);
	}

	async function getFeaturedArticles() {
		const res = await fetch(`${config.apiBaseUrl}/articles/get-featured-articles`);
		if (!res.ok) throw new Error("Failed to fetch featured articles");
		const data = await res.json();
		data.map((article: FeaturedArticleType) => {
			article.titleLowerCase = article.title?.toLowerCase().replace(/ /g, "-");
		});
		setFeaturedArticles(data);
	}

	useEffect(() => {
		getFeaturedArticles();
		getCategories();
	}, []);

	return (<>
		{/* Featured articles section */}
		<HorizontalScrollableArea title='Featured Articles'>
			{featuredArticles.map((article: FeaturedArticleType) => (
				<div key={article.id} className='size-40 center flex-none bg-sub rounded-2xl'>
					<Link to={`/article/${article.id}/${article.titleLowerCase}`}>{article.title}</Link>
				</div>
			))}
		</HorizontalScrollableArea>
		{/* Category section */}
		<HorizontalScrollableArea title='Categories'>
			{categories.map((category: CategoryType) => (
				<div key={category.id} className='size-40 center flex-none bg-sub rounded-2xl'>
					<Link to={`/category/${category.name}`}>{category.name}</Link>
				</div>
			))}
		</HorizontalScrollableArea>
		<div className='w-full h-1/3'>
			{/* This Day Section */}
			<BigCard title='This Day in History' src='https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/4ddbf357-a161-4940-bc6a-7fb833f4cb64/a9dffe49-0975-417f-8b0b-fb063d3d99ac.png' />
		</div>
	</>)
}

export default Home;