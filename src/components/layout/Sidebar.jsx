import { NavLink } from 'react-router-dom'

function Sidebar() {
	return (
		<>
			<aside className='w-[300px] h-screen dark:bg-gradient-to-b dark:from-[#0f1535] dark:to-[#1a1f3a] bg-white px-5 py-8 flex flex-col fixed left-0 top-0 overflow-y-auto shadow-xl transition-colors duration-300'>
				<div className='mb-10 ml-4 mt-4'>
					<h2 className='dark:text-white text-gray-900 font-display text-3xl tracking-wide'>
						<span className='font-black'>Ex</span> Dashboard
					</h2>
					<hr className='mt-10 opacity-30 dark:border-white border-gray-300' />
				</div>

				<nav className='flex-1 mb-5'>
					<ul className='list-none p-0 m-0'>
						<li className='mb-2'>
							<NavLink to={"/"} className='flex items-center px-4 py-3 dark:text-[#a3aed0] text-gray-600 rounded-xl transition-all duration-300 font-medium gap-3 dark:hover:bg-white/5 hover:bg-gray-100 dark:hover:text-white hover:text-gray-900' >
								<i className="fa-solid fa-house w-6 flex items-center justify-center"></i>
								<span className='flex-1 text-base font-display'>Main Dashboard</span>
							</NavLink>
						</li>
						<li className='mb-2'>
							<NavLink to={"users"} className='flex items-center px-4 py-3 dark:text-[#a3aed0] text-gray-600 rounded-xl transition-all duration-300 font-medium gap-3 dark:hover:bg-white/5 hover:bg-gray-100 dark:hover:text-white hover:text-gray-900'>
								<i className="fa-solid fa-person w-6 flex items-center justify-center"></i>
								<span className='flex-1 font-display text-base'>Users</span>
							</NavLink>
						</li>
						<li className='mb-2'>
							<NavLink className='flex items-center px-4 py-3 dark:text-[#a3aed0] text-gray-600 rounded-xl transition-all duration-300 font-medium gap-3 dark:hover:bg-white/5 hover:bg-gray-100 dark:hover:text-white hover:text-gray-900' to={"products"}>
								<i className="fa-solid fa-basket-shopping w-6 flex items-center justify-center"></i>
								<span className='flex-1 text-base font-display'>Products</span>
							</NavLink>
						</li>
						<li className='mb-2'>
							<NavLink className='flex items-center px-4 py-3 dark:text-[#a3aed0] text-gray-600 rounded-xl transition-all duration-300 font-medium gap-3 dark:hover:bg-white/5 hover:bg-gray-100 dark:hover:text-white hover:text-gray-900' to={"settings"}>
								<i className="fa-solid fa-gear w-6 flex items-center justify-center"></i>	
								<span className='flex-1 text-base font-display'>Settings</span>
							</NavLink>
						</li>
						<li className='mb-2'>
							<NavLink to="login" className='flex items-center px-4 py-3 dark:text-[#a3aed0] text-gray-600 rounded-xl transition-all duration-300 font-medium gap-3 dark:hover:bg-white/5 hover:bg-gray-100 dark:hover:text-white hover:text-gray-900'>
								<i className="fa-solid fa-lock w-6 flex items-center justify-center"></i>
								<span className='flex-1 text-base font-display'>Sign In</span>
							</NavLink>
						</li>
					</ul>
				</nav>
			</aside>
		</>
	)
}

export default Sidebar