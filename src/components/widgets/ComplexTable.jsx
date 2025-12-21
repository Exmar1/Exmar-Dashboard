const tableData = [
	{
		name: 'Horizon UI PRO',
		status: 'Approved',
		date: '18 Apr 2022',
		progress: 80,
	},
	{
		name: 'Horizon UI Free',
		status: 'Disable',
		date: '18 Apr 2022',
		progress: 30,
	},
	{
		name: 'Marketplace',
		status: 'Error',
		date: '20 May 2021',
		progress: 60,
	},
	{
		name: 'Weekly Updates',
		status: 'Approved',
		date: '12 Jul 2021',
		progress: 45,
	},
]

const statusConfig = {
	Approved: {
		color: 'text-green-400',
		bg: 'bg-green-500/20',
		icon: 'fa-check',
	},
	Disable: {
		color: 'text-red-400',
		bg: 'bg-red-500/20',
		icon: 'fa-xmark',
	},
	Error: {
		color: 'text-yellow-400',
		bg: 'bg-yellow-500/20',
		icon: 'fa-exclamation',
	},
}

export function ComplexTable() {
	return (
		<div className="dark:bg-card bg-white rounded-2xl p-6 shadow-md transition-colors duration-300">
			<div className="flex items-center justify-between mb-6">
				<h3 className="dark:text-white text-gray-900 font-semibold text-lg">
					Complex Table
				</h3>
				<button className="w-9 h-9 rounded-full dark:bg-gray-800 bg-gray-200 flex items-center justify-center dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900 transition">
					<i className="fa-solid fa-ellipsis"></i>
				</button>
			</div>

			<div className="overflow-x-auto">
				<table className="w-full text-sm">
					<thead>
						<tr className="dark:text-gray-400 text-gray-600 dark:border-gray-700 border-gray-200 border-b">
							<th className="text-left py-3 font-medium">
								NAME
							</th>
							<th className="text-left py-3 font-medium">
								STATUS
							</th>
							<th className="text-left py-3 font-medium">
								DATE
							</th>
							<th className="text-left py-3 font-medium">
								PROGRESS
							</th>
						</tr>
					</thead>

					<tbody>
						{tableData.map((item) => {
							const status = statusConfig[item.status]

							return (
								<tr
									key={item.name}
									className="dark:border-gray-800 border-gray-100 border-b last:border-none"
								>
									<td className="py-4 dark:text-white text-gray-900 font-medium">
										{item.name}
									</td>

									<td className="py-4">
										<div
											className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${status.bg} ${status.color}`}
										>
											<i
												className={`fa-solid ${status.icon}`}
											></i>
											{item.status}
										</div>
									</td>

									<td className="py-4 dark:text-gray-300 text-gray-600">
										{item.date}
									</td>

									<td className="py-4">
										<div className="w-full h-2 dark:bg-gray-800 bg-gray-200 rounded-full overflow-hidden">
											<div
												className="h-full bg-purple-500 rounded-full transition-all"
												style={{
													width: `${item.progress}%`,
												}}
											></div>
										</div>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default ComplexTable