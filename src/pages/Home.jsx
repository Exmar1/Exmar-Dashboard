import Card from '../components/Card'

function Home() {
	return (
		<div className='p-6'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6'>
				<Card>
					<div className='bg-white rounded-2xl p-6 shadow-sm'>
						<div className='flex items-center justify-between mb-4'>
							<div className='w-12 h-12 bg-blue- rounded-xl flex items-center justify-center'>
								<i className='fa-solid fa-chart-bar text-blue-600 text-xl'></i>
							</div>
						</div>
						<p className='text-gray-500 text-sm mb-1'>Earnings</p>
						<h3 className='text-2xl font-bold text-[#2b3674]'>$350.4</h3>
					</div>
				</Card>

			
				<Card>
					<div className='bg-white rounded-2xl p-6 shadow-sm'>
						<div className='flex items-center justify-between mb-4'>
							<div className='w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center'>
								<i className='fa-solid fa-dollar-sign text-red-600 text-xl'></i>
							</div>
						</div>
						<p className='text-gray-500 text-sm mb-1'>Spend this month</p>
						<h3 className='text-2xl font-bold text-[#2b3674]'>$642.39</h3>
					</div>
				</Card>

				<Card>
					<div className='bg-white rounded-2xl p-6 shadow-sm'>
						<div className='flex items-center justify-between mb-4'>
							<div className='w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center'>
								<i className='fa-solid fa-cart-shopping text-green-600 text-xl'></i>
							</div>
						</div>
						<p className='text-gray-500 text-sm mb-1'>Sales</p>
						<h3 className='text-2xl font-bold text-[#2b3674]'>$574.34</h3>
						<p className='text-green-500 text-xs mt-1'>+23% since last month</p>
					</div>
				</Card>

				<Card>
					<div className='bg-white rounded-2xl p-6 shadow-sm'>
						<div className='flex items-center justify-between mb-4'>
							<div className='w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center'>
								<i className='fa-solid fa-wallet text-purple-600 text-xl'></i>
							</div>
						</div>
						<p className='text-gray-500 text-sm mb-1'>Your balance</p>
						<h3 className='text-2xl font-bold text-[#2b3674]'>$1,000</h3>
					</div>
				</Card>
			</div>
		</div>
	)
}

export default Home