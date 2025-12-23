import { useEffect, useState } from 'react'
import { LuMoon, LuSun } from "react-icons/lu"
import { useLocation } from 'react-router-dom'
import { useTheme } from '../ThemeSetter/ThemeSet'

function Header() {
	const location = useLocation()
	const { theme, toggleTheme } = useTheme()
	const currentPath = location.pathname
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	function getPageTitle(page) {
		switch (page) {
			case '/': return 'Main Dashboard'
			case '/products': return 'Products Page'
			case '/settings': return 'Settings Page'
			case '/users': return 'Users Page'
			default: return ''
		}
	}

	const pageTitle = getPageTitle(currentPath)

	return (
		<header
			className={`
				sticky top-0 z-40
				px-4 md:px-8 py-4
				transition-all duration-300
				${isScrolled
					? 'dark:bg-[#0b1437]/70 bg-white/70 backdrop-blur-md shadow-lg'
					: 'dark:bg-[#0b1437] bg-white'
				}
			`}
		>
			<div className="flex items-center justify-between">
				<div className="ml-0 lg:ml-0">
					<p className='dark:text-white text-gray-600 font-bold text-xs md:text-sm mb-1'>
						Pages / <span className="hidden sm:inline">{pageTitle}</span>
					</p>
					<h1 className='dark:text-white text-gray-900 text-xl md:text-3xl lg:text-4xl font-bold'>
						{pageTitle}
					</h1>
				</div>

				<div className='flex dark:bg-card bg-gray-100 p-2 md:p-3 rounded-4xl items-center gap-2 md:gap-4'>

					<input
						type='search'
						placeholder='Type here...'
						className='hidden md:block px-4 py-2 dark:bg-[#0f1535] bg-white border dark:border-[#2d3748] border-gray-300 rounded-4xl dark:text-white text-gray-900 dark:placeholder:text-[#a3aed0]/50 placeholder:text-gray-400 [&::-webkit-search-cancel-button]:hidden'
					/>

					<button 
						onClick={toggleTheme}
						className="dark:text-white text-gray-700 text-xl md:text-2xl hover:text-yellow-500 transition-colors"
						aria-label="Toggle theme"
					>
						{theme === 'dark' ? <LuSun /> : <LuMoon />}
					</button>

					<div className='w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full dark:bg-profile bg-blue-600'>
						<span className='text-xs md:text-sm font-medium text-white'>
							DP
						</span>
					</div>
				</div>
			</div>

			<hr className='my-3 md:my-5 opacity-30 dark:border-white border-gray-300' />
		</header>
	)
}

export default Header