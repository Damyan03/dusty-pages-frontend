import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import HeroSection from './components/HeroSection.tsx';
import Icon from './components/Icon.tsx';
import Profile from './pages/Profile.tsx';
import NotFound from './pages/NotFound.tsx';
import Home from './pages/Home.tsx';
import Article from './pages/Article.tsx';
import Category from './pages/Category.tsx';
import SideMenu from './components/SideMenu.tsx';
import AllArticles from './pages/AllArticles.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';

function App() {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const location = useLocation();

	const toggleMenu = () => {
		setMenuIsOpen(!menuIsOpen);
	}

	return (<>
		{/* Main App */}
		<div className='min-h-screen w-full flex flex-col bg-main'>
			{menuIsOpen && <SideMenu toggleMenu={toggleMenu} />}
			{/* TopBar Menu */}
			<div className='h-20 w-full bg-sub p-3'>
				<div className='h-full w-13'>
					<button onClick={toggleMenu} className='h-full w-full flex items-center justify-center'>
						<Icon src="menu" />
					</button>
				</div>
			</div>
			{/* Main content & Routes */}
			{location.pathname !== "/profile" && (
				<HeroSection
					title='Discover the World of History'
					src="https://img.freepik.com/premium-photo/this-is-epic-cinematic-digital-painting-medieval-knight-full-armor-standing-battlefield-with-his-sword-drawn-ready-charge_14117-279358.jpg"
				/>
			)}
			<div className="flex-grow p-5 flex flex-col gap-5">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/article/:id/:title" element={<Article />} />
					<Route path="/category/:categoryName" element={<Category />} />
					<Route path="/category/:categoryName/all-articles" element={<AllArticles />} />
					<Route path="/about" element={<div>About</div>} />
					<Route path="/contact" element={<div>Contact</div>} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
			<div className='h-20 w-full bg-sub'>
				{/* Footer */}
			</div>
		</div>
	</>)
}

export default App