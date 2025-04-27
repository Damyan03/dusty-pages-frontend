import { Link } from "react-router-dom";
import BigCard from "../components/BigCard";
import HorizontalScrollableArea from "../components/HorizontalScrollableArea";


function Home() {
	return (<>
		{/* Featured articles section */}
		<HorizontalScrollableArea title='Featured Articles'>
			<div className='w-40 h-40 flex-none bg-sub rounded-2xl'>
				<Link to="/article/1">Article 1</Link>
			</div>
			<div className='w-40 h-40 flex-none bg-sub rounded-2xl'>Article 2</div>
			<div className='w-40 h-40 flex-none bg-sub rounded-2xl'>Article 3</div>
			<div className='w-40 h-40 flex-none bg-sub rounded-2xl'>Article 4</div>
			<div className='w-40 h-40 flex-none bg-sub rounded-2xl'>Article 5</div>
		</HorizontalScrollableArea>
		{/* Category section */}
		<HorizontalScrollableArea title='Categories'>
			<div className='w-40 h-40 flex-none bg-sub rounded-2xl'>
				<Link to="/category/1">Article 1</Link>
			</div>
			<div className='w-40 h-40 flex-none bg-sub rounded-2xl'>Article 2</div>
			<div className='w-40 h-40 flex-none bg-sub rounded-2xl'>Article 3</div>
			<div className='w-40 h-40 flex-none bg-sub rounded-2xl'>Article 4</div>
			<div className='w-40 h-40 flex-none bg-sub rounded-2xl'>Article 5</div>
		</HorizontalScrollableArea>
		<div className='w-full h-1/3'>
			{/* This Day Section */}
			<BigCard title='This Day in History' src='https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/4ddbf357-a161-4940-bc6a-7fb833f4cb64/a9dffe49-0975-417f-8b0b-fb063d3d99ac.png' />
		</div>
	</>)
}

export default Home;