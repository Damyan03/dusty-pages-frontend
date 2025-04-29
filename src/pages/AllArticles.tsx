import { Link } from "react-router-dom";
import Button from "../components/Button";
import ArticleList from "../components/ArticleList";

function AllArticles() {
	return (<>
		<div className="full flex flex-col gap-2">
			<h2 className="text-xl">Category Title - All Articles</h2>
			<ArticleList/>
			<div className="center mt-5">
				<Link to="/">
				<Button text="Back to home"/>
				</Link>
			</div>
		</div>
	</>
	)
}

export default AllArticles;