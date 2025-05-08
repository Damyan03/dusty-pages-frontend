import { Link } from "react-router-dom";
import Button from "../components/Button";

function Article() {
	return (<>
		<div className="full flex flex-col gap-2">
			<small className="text-txt-secondary">DD-MM-YYYY - Author Name</small>
			<h2 className="text-2xl">Article Title</h2>
			{/* Article Content */}
			<p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			<small className="text-txt-secondary">Tags: Tag1, Tag2, Tag3</small>
			<div className="center mt-5">
				<Link to="/">
					<Button text="Back to home" />
				</Link>
			</div>
		</div>
	</>
	)
}

export default Article;