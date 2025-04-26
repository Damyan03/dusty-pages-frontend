import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Profile from './pages/Profile.tsx';
import NotFound from './pages/NotFound.tsx';
import Home from './pages/Home.tsx';

function App() {
	return (<>
		{/* Main App */}
		<div className='min-h-screen w-full flex flex-col bg-main'>
			<div className='h-20 w-full bg-sub p-3'>
				{/* TopBar Menu */}
				<div className='h-full w-13 bg-amber-400'>
					<Link to="/profile">Profile</Link>
				</div>
			</div>
			{/* Main content & Routes */}
			<div className="flex-grow">
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/profile" element={<Profile/>}/>
					<Route path="*" element={<NotFound/>}/>
				</Routes>
			</div>
			
			<div className='h-20 w-full bg-sub'>
				{/* Footer */}
			</div>
		</div>
	</>)
}

export default App
