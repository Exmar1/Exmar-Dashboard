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
				<main className='min-h-screen bg-[#0b1437] p-6'>
					<Outlet />
				</main>
				<Footer />
			</div>
		</>
	)
}

export default Layout