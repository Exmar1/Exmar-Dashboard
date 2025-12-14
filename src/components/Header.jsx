import { useLocation } from 'react-router-dom'

function Header() {

	const location = useLocation()
	const currentPath = location.pathname

	function getPageTitle(page) {
			switch(page) {
				case '/': return "Main Dashboard";
				case "/products": return "Products Page";
				case "/settings": return "Settings Page";
				case "/users": return "Users Page";
				default: return "/";
			}
	}

	const pageTitle = getPageTitle(currentPath)

	return (
		<header className='bg-[#0b1437] px-8 py-4'>
			<div className='flex items-center justify-between'>
				<div>
					<p className='text-white  font-bold text-sm mb-2 my-7'>
						Pages / <span className='text-white font-bold'>{pageTitle}</span>
					</p>
					<h1 className='text-white text-4xl font-bold'>{pageTitle}</h1>
				</div>
				<div className='flex items-center gap-4'>
						<input 
							type='search' 
							placeholder='Type here...' 
							className='px-4 py-2 bg-[#0f1535] border border-[#2d3748] rounded-xl text-white placeholder:text-[#a3aed0]/50 [&::-webkit-search-cancel-button]:hidden'
						/>
						<button className='px-4 py-2 text-white font-medium rounded-xl'>
							<span>Account</span>
						</button>
				
				</div>
			</div>
		</header>
	)
}

export default Header