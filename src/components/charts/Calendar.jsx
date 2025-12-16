export function Calendar() {
	const days = [
		'ПН',
		'ВТ',
		'СР',
		'ЧТ',
		'ПТ',
		'СБ',
		'ВС',
	]

	const dates = [
		'', '', '', '', 1, 2, 3,
		4, 5, 6, 7, 8, 9, 10,
		11, 12, 13, 14, 15, 16, 17,
		18, 19, 20, 21, 22, 23, 24,
		25, 26, 27, 28, 29, 30, 31,
	]

	return (
		<div className="bg-card rounded-2xl p-6">
			<div className="flex items-center justify-between mb-4">
				<button className="w-9 h-9 rounded-xl bg-purple-500 flex items-center justify-center text-white">
					<i className="fa-solid fa-chevron-left"></i>
				</button>

				<h3 className="text-white font-semibold">
					декабрь 2025 г.
				</h3>

				<button className="w-9 h-9 rounded-xl bg-purple-500 flex items-center justify-center text-white">
					<i className="fa-solid fa-chevron-right"></i>
				</button>
			</div>

			<div className="grid grid-cols-7 gap-2 text-center text-xs text-gray-400 mb-3">
				{days.map((day) => (
					<div key={day}>{day}</div>
				))}
			</div>

			<div className="grid grid-cols-7 gap-2 text-center text-sm">
				{dates.map((date, index) => (
					<div
						key={index}
						className={`h-9 flex items-center justify-center rounded-xl ${
							date === 17
								? 'bg-purple-500 text-white'
								: 'text-gray-300'
						}`}
					>
						{date}
					</div>
				))}
			</div>
		</div>
	)
}

export default Calendar
