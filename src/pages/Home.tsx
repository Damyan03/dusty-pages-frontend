import BigCard from "../components/BigCard";
import HeroSection from "../components/HeroSection";
import HorizontalScrollableArea from "../components/HorizontalScrollableArea";


function Home() {
	return (<>
		<HeroSection
			title='Discover the World of History'
			src="https://img.freepik.com/premium-photo/this-is-epic-cinematic-digital-painting-medieval-knight-full-armor-standing-battlefield-with-his-sword-drawn-ready-charge_14117-279358.jpg"/>
		<div className='w-full bg-blue-400'>
			{/* Featured articles section */}
			<HorizontalScrollableArea title='Featured Articles'>
				<div className='w-40 h-40 flex-none bg-red-400 rounded-2xl ml-5'>Article 1</div>
				<div className='w-40 h-40 flex-none bg-red-400 rounded-2xl'>Article 2</div>
				<div className='w-40 h-40 flex-none bg-red-400 rounded-2xl'>Article 3</div>
				<div className='w-40 h-40 flex-none bg-red-400 rounded-2xl'>Article 4</div>
				<div className='w-40 h-40 flex-none bg-red-400 rounded-2xl mr-5'>Article 5</div>
			</HorizontalScrollableArea>
		</div>
		<div className='w-full bg-emerald-400'>
			{/* Category section */}
			<HorizontalScrollableArea title='Categories'>
				<div className='w-40 h-40 flex-none bg-red-400 rounded-2xl ml-5'>Article 1</div>
				<div className='w-40 h-40 flex-none bg-red-400 rounded-2xl'>Article 2</div>
				<div className='w-40 h-40 flex-none bg-red-400 rounded-2xl'>Article 3</div>
				<div className='w-40 h-40 flex-none bg-red-400 rounded-2xl'>Article 4</div>
				<div className='w-40 h-40 flex-none bg-red-400 rounded-2xl mr-5'>Article 5</div>
			</HorizontalScrollableArea>
		</div>
		<div className='w-full h-1/3 bg-orange-400'>
			{/* This Day Section */}
			<BigCard title='This Day in History' description="test" src='https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/4ddbf357-a161-4940-bc6a-7fb833f4cb64/a9dffe49-0975-417f-8b0b-fb063d3d99ac.png' />
		</div>
	</>)
}

export default Home;