import TableUser from '../components/charts/TableUsers'

function Users() {
	return (
		<div className='flex items-start justify-between gap-x-4'>
			<div className='flex flex-col flex-1'> 
				<h2 className='text-white mb-6 text-4xl font-normal'>
					Customers
				</h2>

				<div className='flex flex-row items-center gap-x-6 text-white mb-6'>
					<div className='flex items-center gap-x-2'>
						<i className="fa-solid fa-file-import"></i>
						<button className='font-bold active:bg-gray-500 rounded transition duration-150 ease-in-out active:scale-105'>
							Import
						</button>
					</div>

					<div className='flex items-center gap-x-2'>
						<i className="fa-solid fa-file-export"></i>
						<button className='font-bold active:bg-gray-500 rounded transition duration-150 ease-in-out active:scale-105'>
							Export
						</button>
					</div>
				</div>

				<div className='relative'>
					<input
						type="text"
						placeholder="Search customer..."
						className="bg-transparent mt-5 border focus:border-add focus:outline-none border-gray-500 rounded-lg px-10 py-3.5 text-white w-120"
					/>
					<i className="fa-solid absolute left-2 text-gray-500 top-10 fa-magnifying-glass"></i>
				</div>

				<div className='mt-15 w-full'> 
					<TableUser />
				</div>
				
			</div>

			<div className='bg-add hover:bg-hovered-add transition duration-150 ease-in-out rounded-xl w-25 flex text-white items-center justify-center flex-shrink-0'> 
				<i className="fa-solid fa-plus"></i>
				<button className='p-2.5'>Add</button>
			</div>
		</div>
	)
}

export default Users