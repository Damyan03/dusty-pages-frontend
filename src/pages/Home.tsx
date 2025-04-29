import { Link } from "react-router-dom";
import BigCard from "../components/BigCard";
import HorizontalScrollableArea from "../components/HorizontalScrollableArea";


function Home() {
	return (<>
		{/* Featured articles section */}
		<HorizontalScrollableArea title='Featured Articles'>

			{[...Array(5)].map((_, i) => (
				<div className='size-40 center flex-none bg-sub rounded-2xl'>
					<Link to={`/article/${i+1}`}>Article {i+1}</Link>
				</div>
			))}
		</HorizontalScrollableArea>
		{/* Category section */}
		<HorizontalScrollableArea title='Categories'>
			{[...Array(5)].map((_, i) => (
				<div className='size-40 center flex-none bg-sub rounded-2xl'>
					<Link to={`/category/${i+1}`}>Category {i+1}</Link>
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