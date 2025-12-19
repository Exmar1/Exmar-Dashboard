import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function Header() {
	const location = useLocation()
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
				sticky top-0 z-50
				px-8 py-4
				transition-all duration-300
				${isScrolled
					? 'bg-[#0b1437]/70 backdrop-blur-md shadow-lg'
					: 'bg-[#0b1437]'
				}
			`}
		>
			<div className='flex items-center justify-between'>
				<div>
					<p className='text-white font-bold text-sm mb-1'>
						Pages / <span>{pageTitle}</span>
					</p>
					<h1 className='text-white text-4xl font-bold'>
						{pageTitle}
					</h1>
				</div>

				<div className='flex w-auto bg-card p-3 rounded-4xl items-center gap-4'>
					<input
						type='search'
						placeholder='Type here...'
						className='px-4 py-2 bg-[#0f1535] border border-[#2d3748] rounded-4xl text-white placeholder:text-[#a3aed0]/50 [&::-webkit-search-cancel-button]:hidden'
					/>
					<div className='w-10 h-10 flex items-center justify-center rounded-full bg-profile'>
						<button className='mx-6 text-sm font-medium inline-flex appearance-none text-white '>
							DP
						</button>
					</div>

				</div>
			</div>

			<hr className='my-5 opacity-30 border-white' />
		</header>
	)
}

export default Header
