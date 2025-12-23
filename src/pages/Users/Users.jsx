import TableUser from '../Users/components/TableUsers'

function Users() {
	return (
		<div className='flex flex-col lg:flex-row items-start justify-between gap-4'>

			<div className='flex flex-col flex-1 w-full'> 
				<h2 className='dark:text-white text-gray-900 mb-3 md:mb-6 text-3xl md:text-4xl font-normal transition-colors duration-300'>
					Customers
				</h2>

	
				<div className='hidden md:flex items-center gap-6 dark:text-white text-gray-700 mb-4 md:mb-6'>
					<div className='flex items-center gap-2'>
						<i className="fa-solid fa-file-import"></i>
						<button className='font-bold hover:text-gray-900 dark:hover:text-white transition'>
							Import
						</button>
					</div>

					<div className='flex items-center gap-2'>
						<i className="fa-solid fa-file-export"></i>
						<button className='font-bold hover:text-gray-900 dark:hover:text-white transition'>
							Export
						</button>
					</div>
				</div>


				<div className='relative w-full'>
					<input
						type="text"
						placeholder="Search customer..."
						className="dark:bg-transparent bg-white mt-2 md:mt-5 border dark:focus:border-add focus:border-purple-500 focus:outline-none dark:border-gray-500 border-gray-300 rounded-lg px-10 py-2.5 md:py-3.5 dark:text-white text-gray-900 dark:placeholder:text-gray-500 placeholder:text-gray-400 w-full transition-colors duration-300"
					/>
					<i className="fa-solid absolute left-3 dark:text-gray-500 text-gray-400 bottom-4 md:top-9 fa-magnifying-glass"></i>
				</div>

				<div className="md:hidden mt-6 space-y-3">
					<TableUser mobile />
				</div>

				<div className='hidden md:block mt-8 md:mt-12 w-full overflow-x-auto'>
					<TableUser />
				</div>
			</div>

			<div className='lg:w-25 w-full lg:static sticky bottom-5 z-10 flex justify-end lg:justify-center'>
				<button className='bg-add hover:bg-hovered-add transition duration-150 ease-in-out rounded-full w-14 h-14 lg:w-full lg:rounded-xl flex text-white items-center justify-center shadow-xl active:scale-95'>
					<i className="fa-solid fa-plus text-lg"></i>
					<span className="hidden lg:block p-2 font-semibold">Add</span>
				</button>
			</div>

		</div>
	)
}

export default Users
