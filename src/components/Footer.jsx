function Footer() {
	return (
		<div className='bg-[#0b1437] py-6 px-6'>
			<div className='flex flex-col md:flex-row items-center justify-between gap-4'>
				<p className='text-gray-400 text-sm'>
					© 2025 Ex UI. All Rights Reserved. Made with love by <span className='text-white font-semibold'>Exmar!</span>
				</p>
				<nav>
					<ul className='flex items-center gap-6'>
						<li>
							<a href='#' className='text-gray-400 hover:text-white text-sm transition'>
								Support
							</a>
						</li>
						<li>
							<a href='#' className='text-gray-400 hover:text-white text-sm transition'>
								License
							</a>
						</li>
						<li>
							<a href='#' className='text-gray-400 hover:text-white text-sm transition'>
								Terms of Use
							</a>
						</li>
						<li>
							<a href='#' className='text-gray-400 hover:text-white text-sm transition'>
								Blog
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default Footer