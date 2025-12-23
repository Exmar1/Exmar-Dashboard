import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="lg:hidden fixed top-5 right-[100px] z-[60] w-10 h-10 flex flex-col items-center justify-center gap-1.5 dark:bg-card bg-white rounded-lg shadow-lg"
			>
				<span className={`w-6 h-0.5 dark:bg-white bg-gray-900 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
				<span className={`w-6 h-0.5 dark:bg-white bg-gray-900 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
				<span className={`w-6 h-0.5 dark:bg-white bg-gray-900 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
			</button>

			{isOpen && (
				<div
					onClick={() => setIsOpen(false)}
					className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
				/>
			)}

			<aside className={`
				w-[300px] h-screen 
				dark:bg-gradient-to-b dark:from-[#0f1535] dark:to-[#1a1f3a] bg-white 
				px-5 py-8 flex flex-col fixed left-0 top-0 overflow-y-auto shadow-xl 
				transition-all duration-300 z-50
				${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
			`}>
				<div className='mb-10 ml-4 mt-4'>
					<h2 className='dark:text-white text-gray-900 font-display text-3xl tracking-wide'>
						<span className='font-black'>Ex</span> Dashboard
					</h2>
					<hr className='mt-10 opacity-30 dark:border-white border-gray-300' />
				</div>

				<nav className='flex-1 mb-5'>
					<ul className='list-none p-0 m-0'>
						<li className='mb-2'>
							<NavLink 
								to={"/"} 
								onClick={() => setIsOpen(false)}
								className={({ isActive }) => 
									`flex items-center px-4 py-3 rounded-xl transition-all duration-300 font-medium gap-3 ${
										isActive 
											? 'dark:bg-white/10 bg-purple-100 dark:text-white text-gray-900 font-semibold' 
											: 'dark:text-[#a3aed0] text-gray-600 dark:hover:bg-white/5 hover:bg-gray-100 dark:hover:text-white hover:text-gray-900'
									}`
								}
							>
								<i className="fa-solid fa-house w-6 flex items-center justify-center"></i>
								<span className='flex-1 text-base font-display'>Main Dashboard</span>
							</NavLink>
						</li>
						<li className='mb-2'>
							<NavLink 
								to={"users"}
								onClick={() => setIsOpen(false)}
								className={({ isActive }) => 
									`flex items-center px-4 py-3 rounded-xl transition-all duration-300 font-medium gap-3 ${
										isActive 
											? 'dark:bg-white/10 bg-purple-100 dark:text-white text-gray-900 font-semibold' 
											: 'dark:text-[#a3aed0] text-gray-600 dark:hover:bg-white/5 hover:bg-gray-100 dark:hover:text-white hover:text-gray-900'
									}`
								}
							>
								<i className="fa-solid fa-person w-6 flex items-center justify-center"></i>
								<span className='flex-1 font-display text-base'>Users</span>
							</NavLink>
						</li>
						<li className='mb-2'>
							<NavLink 
								to={"products"}
								onClick={() => setIsOpen(false)}
								className={({ isActive }) => 
									`flex items-center px-4 py-3 rounded-xl transition-all duration-300 font-medium gap-3 ${
										isActive 
											? 'dark:bg-white/10 bg-purple-100 dark:text-white text-gray-900 font-semibold' 
											: 'dark:text-[#a3aed0] text-gray-600 dark:hover:bg-white/5 hover:bg-gray-100 dark:hover:text-white hover:text-gray-900'
									}`
								}
							>
								<i className="fa-solid fa-basket-shopping w-6 flex items-center justify-center"></i>
								<span className='flex-1 text-base font-display'>Products</span>
							</NavLink>
						</li>
						<li className='mb-2'>
							<NavLink 
								to={"settings"}
								onClick={() => setIsOpen(false)}
								className={({ isActive }) => 
									`flex items-center px-4 py-3 rounded-xl transition-all duration-300 font-medium gap-3 ${
										isActive 
											? 'dark:bg-white/10 bg-purple-100 dark:text-white text-gray-900 font-semibold' 
											: 'dark:text-[#a3aed0] text-gray-600 dark:hover:bg-white/5 hover:bg-gray-100 dark:hover:text-white hover:text-gray-900'
									}`
								}
							>
								<i className="fa-solid fa-gear w-6 flex items-center justify-center"></i>	
								<span className='flex-1 text-base font-display'>Settings</span>
							</NavLink>
						</li>
						<li className='mb-2'>
							<NavLink 
								to="login"
								onClick={() => setIsOpen(false)}
								className={({ isActive }) => 
									`flex items-center px-4 py-3 rounded-xl transition-all duration-300 font-medium gap-3 ${
										isActive 
											? 'dark:bg-white/10 bg-purple-100 dark:text-white text-gray-900 font-semibold' 
											: 'dark:text-[#a3aed0] text-gray-600 dark:hover:bg-white/5 hover:bg-gray-100 dark:hover:text-white hover:text-gray-900'
									}`
								}
							>
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