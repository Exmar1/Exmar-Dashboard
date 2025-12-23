import { FancyCheckbox } from '../../components/ui/Checkbox//CustomCheckbox'

function Settings() {
	return (
		<div className="dark:text-white text-gray-900 px-4 sm:px-0">
			<h2 className="text-3xl sm:text-4xl font-normal mb-6 sm:mb-8 transition-colors duration-300">
				Settings
			</h2>

			<div className="dark:bg-card bg-white rounded-2xl shadow-lg dark:border border-gray-200 mb-8 overflow-hidden transition-colors duration-300">

				<div className="p-4 sm:p-6">
					<h3 className="text-lg dark:text-white text-gray-900 font-semibold">
						Notifications
					</h3>
					<p className="text-sm dark:text-gray-400 text-gray-600">
						Manage the notifications
					</p>
				</div>

				<hr className="dark:border-gray-600 border-gray-200" />

				<div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">

					<div>
						<h4 className="font-semibold text-lg dark:text-white text-gray-900 mb-4">
							Email
						</h4>

						<label className="flex mb-4 gap-3 dark:text-white text-gray-700 items-center cursor-pointer hover:opacity-80 transition">
							<FancyCheckbox />
							<span>Product updates</span>
						</label>

						<label className="flex gap-3 dark:text-white text-gray-700 items-center cursor-pointer hover:opacity-80 transition">
							<FancyCheckbox />
							<span>Security updates</span>
						</label>
					</div>

					<div>
						<h4 className="font-semibold text-lg dark:text-white text-gray-900 mb-4">
							Phone
						</h4>

						<label className="flex gap-3 dark:text-white text-gray-700 items-center mb-4 cursor-pointer hover:opacity-80 transition">
							<FancyCheckbox />
							<span>Product updates</span>
						</label>

						<label className="flex gap-3 items-center dark:text-white text-gray-700 cursor-pointer hover:opacity-80 transition">
							<FancyCheckbox />
							<span>Security updates</span>
						</label>
					</div>
				</div>

				<hr className="dark:border-gray-600 border-gray-200" />

				<div className="p-4 flex justify-center sm:justify-end">
					<button className="bg-indigo-500 font-semibold hover:bg-indigo-600 active:scale-95 text-white px-7 py-2 rounded-xl transition-all duration-200 shadow-md">
						Save changes
					</button>
				</div>
			</div>


			<div className="dark:bg-card bg-white rounded-2xl shadow-lg dark:border border-gray-200 overflow-hidden transition-colors duration-300">

				<div className="p-4 sm:p-6">
					<h3 className="text-lg dark:text-white text-gray-900 font-semibold">
						Password
					</h3>
					<p className="text-sm dark:text-gray-400 text-gray-600">
						Update password
					</p>
				</div>

				<hr className="dark:border-gray-600 border-gray-200" />

				<div className="p-4 sm:p-6 flex flex-col gap-4 sm:gap-5 max-w-md">
					<input
						type="password"
						placeholder="Password"
						className="dark:bg-transparent bg-white border dark:text-white text-gray-900 dark:border-gray-600 border-gray-300 rounded-lg px-4 py-3 outline-none dark:focus:border-indigo-500 focus:border-indigo-500 dark:placeholder:text-gray-500 placeholder:text-gray-400 transition-colors duration-200"
					/>

					<input
						type="password"
						placeholder="Confirm password"
						className="dark:bg-transparent bg-white border dark:text-white text-gray-900 dark:border-gray-600 border-gray-300 rounded-lg px-4 py-3 outline-none dark:focus:border-indigo-500 focus:border-indigo-500 dark:placeholder:text-gray-500 placeholder:text-gray-400 transition-colors duration-200"
					/>
				</div>

				<hr className="dark:border-gray-600 border-gray-200" />

				<div className="p-4 flex justify-center sm:justify-end">
					<button className="bg-indigo-500 font-semibold hover:bg-indigo-600 active:scale-95 text-white px-6 py-2 rounded-lg transition-all duration-200 shadow-md">
						Update
					</button>
				</div>
			</div>
		</div>
	)
}

export default Settings
