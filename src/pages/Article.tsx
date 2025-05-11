import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "../components/Button";
import config from "../config.ts";

function Article() {
	const { id } = useParams();

	interface ArticleType {
		title: string;
		date: string;
		author: string;
		body: string;
		tags: string[];
	}

	const [article, setArticle] = useState<ArticleType | null>(null);
	const [loading, setLoading] = useState(true);

	async function getArticle() {
		try {
			const res = await fetch(`${config.apiBaseUrl}/articles/${id}`);
			if (!res.ok) throw new Error("Failed to fetch");
			const data = await res.json();
			setArticle(data);
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		getArticle();
	}, [id]);

	if (loading) return <p>Loading...</p>;
	if (!article) return <p>No article found.</p>;

	return (
		<div className="full flex flex-col gap-2">
			<small className="text-txt-secondary">{article.date} - {article.author}</small>
			<h2 className="text-2xl">{article.title}</h2>
			<p>{article.body}</p>
			<small className="text-txt-secondary">Tags: {article.tags.join(", ")}</small>
			<div className="center mt-5">
				<Link to="/">
					<Button text="Back to home" />
				</Link>
			</div>
		</div>
	);
}

export default Article;