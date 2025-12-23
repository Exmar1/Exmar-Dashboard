function Footer() {
	return (
		<footer className="dark:bg-card bg-white px-4 md:px-8 py-4 md:py-6 dark:text-gray-400 text-gray-600 text-xs md:text-sm transition-colors duration-300">
			<div className="flex flex-col md:flex-row justify-between items-center gap-4">
				<p className="text-center md:text-left">
					© 2025 Ex UI. All Rights Reserved. Made with love by{' '}
					<span className="dark:text-white text-gray-900 font-semibold">Exmar</span>
				</p>
				<div className="flex flex-wrap justify-center gap-3 md:gap-6">
					<a href="#" className="hover:text-purple-500 transition">Support</a>
					<a href="#" className="hover:text-purple-500 transition">License</a>
					<a href="#" className="hover:text-purple-500 transition">Terms of Use</a>
					<a href="#" className="hover:text-purple-500 transition">Blog</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer