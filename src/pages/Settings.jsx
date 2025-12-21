import { FancyCheckbox } from '../components/Checkbox/CustomCheckbox'

function Settings() {
	return (
		<div className="text-white">
			<h2 className="text-4xl font-normal mb-8">Settings</h2>

			<div className="bg-card text-gray-800 rounded-2xl shadow border border-gray-600 mb-8">
				<div className="p-6">
					<h3 className="text-lg text-white font-semibold">Notifications</h3>
					<p className="text-sm text-gray-400">
						Manage the notifications
					</p>
				</div>

				<hr className="border-gray-600" />

				<div className="p-6 grid grid-cols-2 gap-10">
					{/* Email section */}
					<div>
						<h4 className="font-semibold text-lg text-white mb-4">Email</h4>

						<label className="flex mb-5 gap-3 text-white items-center cursor-pointer">
							<FancyCheckbox />
							<span >Product updates</span>
						</label>

						<label className="flex text-white gap-3 items-center cursor-pointer">
							<FancyCheckbox />
							<span>Security updates</span>
						</label>
					</div>

					{/* Phone section */}
					<div>
						<h4 className="font-semibold text-white mb-4">Phone</h4>

						<label className="flex gap-3 text-white items-center mb-5 cursor-pointer">
							<FancyCheckbox />
							<span>Email</span>
						</label>

						<label className="flex gap-3 items-center text-white cursor-pointer">
							<FancyCheckbox />
							<span>Security updates</span>
						</label>
					</div>
				</div>

				<hr className="border-gray-600" />

				<div className="p-4 flex justify-end">
					<button className="bg-indigo-500 font-semibold hover:bg-indigo-600 text-white px-7 py-2 rounded-xl">
						Save changes
					</button>
				</div>
			</div>

			{/* Password */}
			<div className="bg-card border-gray-600 text-gray-800 rounded-2xl shadow border">
				<div className="p-6">
					<h3 className="text-lg text-white font-semibold">Password</h3>
					<p className="text-sm text-gray-400">
						Update password
					</p>
				</div>

				<hr className="border-gray-600 " />

				<div className="p-6 flex flex-col gap-5 max-w-md">
					<input
						type="password"
						placeholder="Password"
						className="border text-white border-gray-600  rounded-lg px-4 py-3 outline-none focus:border-indigo-500"
					/>

					<input
						type="password"
						placeholder="Confirm password"
						className="border text-white border-gray-600  rounded-lg px-4 py-3 outline-none focus:border-indigo-500"
					/>
				</div>

				<hr className="border-gray-600 " />

				<div className="p-4 flex justify-end">
					<button className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg">
						Update
					</button>
				</div>
			</div>
		</div>
	)
}

export default Settings
