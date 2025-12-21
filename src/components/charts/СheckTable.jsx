const tableData = [
  { name: 'Horizon UI PRO', progress: '17.5%', quantity: 2458, date: '12 Jan 2021' },
  { name: 'Horizon UI Free', progress: '10.8%', quantity: 1485, date: '21 Feb 2021' },
  { name: 'Weekly Update', progress: '21.3%', quantity: 1024, date: '13 Mar 2021' },
  { name: 'Venus 3D Asset', progress: '31.5%', quantity: 858, date: '24 Jan 2021' },
  { name: 'Marketplace', progress: '12.2%', quantity: 258, date: '24 Oct 2022' },
]

export function CheckTable() {
  return (
    <div className="dark:bg-card bg-white rounded-2xl p-6 h-full shadow-md transition-colors duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="dark:text-white text-gray-900 font-semibold">Check Table</h3>
        <button className="dark:text-gray-400 text-gray-600 hover:text-purple-500 transition">•••</button>
      </div>

      <table className="w-full text-sm">
        <thead className="dark:text-gray-400 text-gray-600 dark:border-white/10 border-gray-200 border-b">
          <tr>
            <th className="text-left py-2 font-medium">NAME</th>
            <th className="font-medium">PROGRESS</th>
            <th className="font-medium">QUANTITY</th>
            <th className="font-medium">DATE</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((row, i) => (
            <tr key={i} className="dark:border-white/5 border-gray-100 border-b">
              <td className="py-3 flex items-center gap-2 dark:text-white text-gray-900">
                <input 
                  type="checkbox" 
                  defaultChecked={i !== 0}
                  className="w-4 h-4 accent-purple-500"
                />
                {row.name}
              </td>
              <td className="text-center dark:text-white text-gray-900">{row.progress}</td>
              <td className="text-center dark:text-white text-gray-900">{row.quantity}</td>
              <td className="text-center dark:text-white text-gray-900">{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CheckTable