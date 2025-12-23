import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

function Layout() {
	return (
		<>
			<Sidebar />
			<div className='ml-0 dark:bg-[#0B1437] lg:ml-[300px]'> 
				<Header />
				<main className='min-h-screen p-3 md:p-6'>
					<Outlet />
				</main>
				<Footer />
			</div>
		</>
	)
}

export default Layout