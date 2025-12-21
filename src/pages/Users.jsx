import TableUser from '../components/charts/TableUsers'

function Users() {
	return (
		<div className='flex items-start justify-between gap-x-4'>
			<div className='flex flex-col flex-1'> 
				<h2 className='dark:text-white text-gray-900 mb-6 text-4xl font-normal transition-colors duration-300'>
					Customers
				</h2>

				<div className='flex flex-row items-center gap-x-6 dark:text-white text-gray-700 mb-6'>
					<div className='flex items-center gap-x-2'>
						<i className="fa-solid fa-file-import"></i>
						<button className='font-bold dark:active:bg-gray-700 active:bg-gray-300 rounded transition duration-150 ease-in-out active:scale-105 dark:hover:text-white hover:text-gray-900'>
							Import
						</button>
					</div>

					<div className='flex items-center gap-x-2'>
						<i className="fa-solid fa-file-export"></i>
						<button className='font-bold dark:active:bg-gray-700 active:bg-gray-300 rounded transition duration-150 ease-in-out active:scale-105 dark:hover:text-white hover:text-gray-900'>
							Export
						</button>
					</div>
				</div>

				<div className='relative'>
					<input
						type="text"
						placeholder="Search customer..."
						className="dark:bg-transparent bg-white mt-5 border dark:focus:border-add focus:border-purple-500 focus:outline-none dark:border-gray-500 border-gray-300 rounded-lg px-10 py-3.5 dark:text-white text-gray-900 dark:placeholder:text-gray-500 placeholder:text-gray-400 w-120 transition-colors duration-300"
					/>
					<i className="fa-solid absolute left-2 dark:text-gray-500 text-gray-400 top-10 fa-magnifying-glass"></i>
				</div>

				<div className='mt-15 w-full'> 
					<TableUser />
				</div>
				
			</div>

			<div className='bg-add hover:bg-hovered-add transition duration-150 ease-in-out rounded-xl w-25 flex text-white items-center justify-center flex-shrink-0 shadow-lg'> 
				<i className="fa-solid fa-plus"></i>
				<button className='p-2.5 font-semibold'>Add</button>
			</div>
		</div>
	)
}

export default Users