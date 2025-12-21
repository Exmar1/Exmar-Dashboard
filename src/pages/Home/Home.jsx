import Calendar from '../../components/widgets/Calendar'
import ComplexTable from '../../components/widgets/ComplexTable'
import DailyTraffic from '../../components/widgets/DailyTraffic'
import PieStats from '../../components/widgets/PieStats'
import { RevenueLineChart } from '../../components/widgets/revenudeChart'
import Tasks from '../../components/widgets/Task'
import { WeeklyRevenueChart } from '../../components/widgets/weeklyData'
import CheckTable from '../../components/widgets/СheckTable'

function Home() {
	return (
		<div className="p-6 space-y-8">

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
				<div className="dark:bg-card bg-white rounded-2xl p-5 flex items-center gap-4 shadow-md transition-colors duration-300">
					<div className="w-14 h-14 dark:bg-gray-800 bg-blue-100 rounded-full flex items-center justify-center">
						<i className="fa-solid fa-chart-bar dark:text-white text-blue-600 text-xl"></i>
					</div>
					<div>
						<p className="dark:text-gray-300 text-gray-600 text-sm">Earnings</p>
						<h3 className="text-2xl font-bold dark:text-white text-gray-900">$350.4</h3>
					</div>
				</div>

				<div className="dark:bg-card bg-white rounded-2xl p-5 flex items-center gap-4 shadow-md transition-colors duration-300">
					<div className="w-14 h-14 dark:bg-gray-800 bg-green-100 rounded-full flex items-center justify-center">
						<i className="fa-solid fa-dollar-sign dark:text-white text-green-600 text-xl"></i>
					</div>
					<div>
						<p className="dark:text-gray-300 text-gray-600 text-sm">Spend this month</p>
						<h3 className="text-2xl font-bold dark:text-white text-gray-900">$642.39</h3>
					</div>
				</div>

				<div className="dark:bg-card bg-white rounded-2xl p-5 flex items-center gap-4 shadow-md transition-colors duration-300">
					<div className="w-14 h-14 dark:bg-gray-800 bg-purple-100 rounded-full flex items-center justify-center">
						<i className="fa-solid fa-cart-shopping dark:text-white text-purple-600 text-xl"></i>
					</div>
					<div>
						<p className="dark:text-gray-300 text-gray-600 text-sm">Sales</p>
						<h3 className="text-2xl font-bold dark:text-white text-gray-900">$574.34</h3>
						<p className="text-green-500 text-xs">+23% since last month</p>
					</div>
				</div>

				<div className="dark:bg-card bg-white rounded-2xl p-5 flex items-center gap-4 shadow-md transition-colors duration-300">
					<div className="w-14 h-14 dark:bg-gray-800 bg-orange-100 rounded-full flex items-center justify-center">
						<i className="fa-solid fa-wallet dark:text-white text-orange-600 text-xl"></i>
					</div>
					<div>
						<p className="dark:text-gray-300 text-gray-600 text-sm">Your balance</p>
						<h3 className="text-2xl font-bold dark:text-white text-gray-900">$1,000</h3>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div className="dark:bg-card bg-white rounded-2xl p-6 shadow-md transition-colors duration-300">
					<div className="flex justify-between mb-4">
						<h3 className="dark:text-white text-gray-900 font-semibold">Revenue</h3>
						<span className="dark:text-gray-400 text-gray-600 text-sm">This month</span>
					</div>
					<div className="h-[280px]">
						<RevenueLineChart />
					</div>
				</div>

				<div className="dark:bg-card bg-white rounded-2xl p-6 shadow-md transition-colors duration-300">
					<div className="flex justify-between mb-4">
						<h3 className="dark:text-white text-gray-900 font-semibold">Weekly Revenue</h3>
						<span className="dark:text-gray-400 text-gray-600 text-sm">Last 7 days</span>
					</div>
					<div className="h-[280px]">
						<WeeklyRevenueChart />
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
				<div className="lg:col-span-2">
					<CheckTable />
				</div>

				<DailyTraffic />
				<PieStats />
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
				<div className="lg:col-span-2">
					<ComplexTable />
				</div>

				<div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
					<Tasks />
					<Calendar />
				</div>
			</div>

		</div>
	)
}

export default Home