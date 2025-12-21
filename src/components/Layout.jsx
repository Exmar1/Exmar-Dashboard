import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

function Layout() {
	return (
		<>
			<Sidebar />
			<div className='ml-[300px]'> 
				<Header />
				<main className='min-h-screen dark:bg-[#0b1437] bg-[#EDF2F7] p-6 transition-colors duration-300'>
					<Outlet />
				</main>
				<Footer />
			</div>
		</>
	)
}

export default Layout