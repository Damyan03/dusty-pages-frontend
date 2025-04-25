import './App.css'

function App() {
	return (
		<div className='h-full w-full bg-main'>
			<div className='h-20 w-full bg-sub'>
				{/* TopBar Menu */}
			</div>
			<div className='w-full h-1/3 relative'>
				<div className='full absolute bg-gradient-to-t from-dark to-75%'></div>
				<img className="full object-cover" src="https://img.freepik.com/premium-photo/this-is-epic-cinematic-digital-painting-medieval-knight-full-armor-standing-battlefield-with-his-sword-drawn-ready-charge_14117-279358.jpg"></img>
			</div>
			<div className='w-full h-1/4 bg-blue-400'>
				{/* Featured articles section */}
			</div>
			<div className='w-full h-1/4 bg-emerald-400'>
				{/* Category section */}
			</div>
			<div className='w-full h-1/3 bg-orange-400'>
				{/* Hero section */}
			</div>
			<div className='h-20 w-full bg-sub'>
				{/* TopBar Menu */}
			</div>
		</div>
	)
}

export default App
