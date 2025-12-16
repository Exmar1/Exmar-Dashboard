import Calendar from '../components/charts/Calendar'
import ComplexTable from '../components/charts/ComplexTable'
import DailyTraffic from '../components/charts/DailyTraffic'
import PieStats from '../components/charts/PieStats'
import { RevenueLineChart } from '../components/charts/revenudeChart'
import Tasks from '../components/charts/Task'
import { WeeklyRevenueChart } from '../components/charts/weeklyData'
import CheckTable from '../components/charts/СheckTable'

function Home() {
	return (
		<div className="p-6 space-y-8">

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
				<div className="bg-card rounded-2xl p-5 flex items-center gap-4">
					<div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center">
						<i className="fa-solid fa-chart-bar text-white text-xl"></i>
					</div>
					<div>
						<p className="text-gray-300 text-sm">Earnings</p>
						<h3 className="text-2xl font-bold text-white">$350.4</h3>
					</div>
				</div>

				<div className="bg-card rounded-2xl p-5 flex items-center gap-4">
					<div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center">
						<i className="fa-solid fa-dollar-sign text-white text-xl"></i>
					</div>
					<div>
						<p className="text-gray-300 text-sm">Spend this month</p>
						<h3 className="text-2xl font-bold text-white">$642.39</h3>
					</div>
				</div>

				<div className="bg-card rounded-2xl p-5 flex items-center gap-4">
					<div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center">
						<i className="fa-solid fa-cart-shopping text-white text-xl"></i>
					</div>
					<div>
						<p className="text-gray-300 text-sm">Sales</p>
						<h3 className="text-2xl font-bold text-white">$574.34</h3>
						<p className="text-green-500 text-xs">+23% since last month</p>
					</div>
				</div>

				<div className="bg-card rounded-2xl p-5 flex items-center gap-4">
					<div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center">
						<i className="fa-solid fa-wallet text-white text-xl"></i>
					</div>
					<div>
						<p className="text-gray-300 text-sm">Your balance</p>
						<h3 className="text-2xl font-bold text-white">$1,000</h3>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div className="bg-card rounded-2xl p-6">
					<div className="flex justify-between mb-4">
						<h3 className="text-white font-semibold">Revenue</h3>
						<span className="text-gray-400 text-sm">This month</span>
					</div>
					<div className="h-[280px]">
						<RevenueLineChart />
					</div>
				</div>

				<div className="bg-card rounded-2xl p-6">
					<div className="flex justify-between mb-4">
						<h3 className="text-white font-semibold">Weekly Revenue</h3>
						<span className="text-gray-400 text-sm">Last 7 days</span>
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