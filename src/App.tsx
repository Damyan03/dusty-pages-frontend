import './App.css'
import BigCard from './components/BigCard'
import HorizontalScrollableArea from './components/HorizontalScrollableArea'

function App() {
	return (
		<div className='h-full w-full bg-main'>
			<div className='h-20 w-full bg-sub p-3'>
				{/* TopBar Menu */}
				<div className='h-full w-13 bg-amber-400'></div>
			</div>
			<div className='w-full h-1/3 relative'>
				<div className='full absolute bg-gradient-to-t from-dark to-75%'></div>
				<img className="full object-cover" src="https://img.freepik.com/premium-photo/this-is-epic-cinematic-digital-painting-medieval-knight-full-armor-standing-battlefield-with-his-sword-drawn-ready-charge_14117-279358.jpg"></img>
			</div>
			<div className='w-full h-2/7 bg-blue-400'>
				{/* Featured articles section */}
				<HorizontalScrollableArea title='Featured Articles'>
					<div className='w-40 h-40 flex-none bg-red-400 rounded-2xl'>Article 1</div>
					<div className='w-40 h-40 flex-none bg-red-400 rounded-2xl'>Article 2</div>
					<div className='w-40 h-40 flex-none bg-red-400 rounded-2xl'>Article 3</div>
					<div className='w-40 h-40 flex-none bg-red-400 rounded-2xl'>Article 4</div>
					<div className='w-40 h-40 flex-none bg-red-400 rounded-2xl'>Article 5</div>
				</HorizontalScrollableArea>
			</div>
			<div className='w-full h-2/7 bg-emerald-400'>
				{/* Category section */}
				<HorizontalScrollableArea title='Categories'>
					<div className='w-40 h-40 flex-none bg-red-400 rounded-2xl'>Article 1</div>
					<div className='w-40 h-40 flex-none bg-red-400 rounded-2xl'>Article 2</div>
					<div className='w-40 h-40 flex-none bg-red-400 rounded-2xl'>Article 3</div>
					<div className='w-40 h-40 flex-none bg-red-400 rounded-2xl'>Article 4</div>
					<div className='w-40 h-40 flex-none bg-red-400 rounded-2xl'>Article 5</div>
				</HorizontalScrollableArea>
			</div>
			<div className='w-full h-1/3 bg-orange-400'>
				{/* This Day Section */}
				<BigCard title='This Day in History' src='https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/4ddbf357-a161-4940-bc6a-7fb833f4cb64/a9dffe49-0975-417f-8b0b-fb063d3d99ac.png'/>
			</div>
			<div className='h-20 w-full bg-sub'>
				{/* Footer */}
			</div>
		</div>
	)
}

export default App
