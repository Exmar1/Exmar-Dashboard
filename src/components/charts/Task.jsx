import { useState } from 'react'

const initialTasks = [
	{ id: 1, title: 'Landing Page Design', done: false },
	{ id: 2, title: 'Dashboard Builder', done: true },
	{ id: 3, title: 'Mobile App Design', done: true },
	{ id: 4, title: 'Illustrations', done: false },
	{ id: 5, title: 'Promotional LP', done: true },
	{ id: 6, title: 'UI Components Library', done: false },
	{ id: 7, title: 'User Testing', done: false },
]

export function Tasks() {
	const [tasks, setTasks] = useState(initialTasks)

	const toggleTask = (id) => {
		setTasks((prev) =>
			prev.map((task) =>
				task.id === id
					? { ...task, done: !task.done }
					: task
			)
		)
	}

	return (
		<div className="bg-card rounded-2xl p-6 h-full flex flex-col">
			{/* Header */}
			<div className="flex items-center justify-between mb-6">
				<div className="flex items-center gap-2">
					<div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
						<i className="fa-solid fa-check text-white text-xs"></i>
					</div>
					<h3 className="text-white font-semibold">Tasks</h3>
				</div>

				<button className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition">
					<i className="fa-solid fa-ellipsis"></i>
				</button>
			</div>

			{/* List */}
			<div className="space-y-4 flex-1">
				{tasks.map((task) => (
					<div
						key={task.id}
						className="flex items-center justify-between w-full"
					>
						<label className="flex items-center gap-3 cursor-pointer flex-1">
							<input
								type="checkbox"
								checked={task.done}
								onChange={() => toggleTask(task.id)}
								className="w-4 h-4 accent-purple-500 flex-shrink-0"
							/>
							<span
								className={`text-sm ${
									task.done
										? 'text-gray-400 line-through'
										: 'text-white'
								}`}
							>
								{task.title}
							</span>
						</label>

						<i className="fa-solid fa-grip-vertical text-gray-500 ml-2"></i>
					</div>
				))}
			</div>
		</div>
	)
}

export default Tasks