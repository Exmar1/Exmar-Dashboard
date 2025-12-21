function Footer() {
	return (
		<footer className="dark:bg-card bg-white px-8 py-6 dark:text-gray-400 text-gray-600 text-sm transition-colors duration-300">
			<div className="flex justify-between items-center">
				<p>© 2025 Ex UI. All Rights Reserved. Made with love by <span className="dark:text-white text-gray-900 font-semibold">Exmart</span></p>
				<div className="flex gap-6">
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