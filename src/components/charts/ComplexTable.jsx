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
		<div className="bg-card rounded-2xl p-6">
			{/* Header */}
			<div className="flex items-center justify-between mb-6">
				<h3 className="text-white font-semibold text-lg">
					Complex Table
				</h3>
				<button className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition">
					<i className="fa-solid fa-ellipsis"></i>
				</button>
			</div>

			{/* Table */}
			<div className="overflow-x-auto">
				<table className="w-full text-sm">
					<thead>
						<tr className="text-gray-400 border-b border-gray-700">
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
									className="border-b border-gray-800 last:border-none"
								>
									{/* Name */}
									<td className="py-4 text-white font-medium">
										{item.name}
									</td>

									{/* Status */}
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

									{/* Date */}
									<td className="py-4 text-gray-300">
										{item.date}
									</td>

									{/* Progress */}
									<td className="py-4">
										<div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
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
