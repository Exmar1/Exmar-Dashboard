const tableData = [
  { name: 'Horizon UI PRO', progress: '17.5%', quantity: 2458, date: '12 Jan 2021' },
  { name: 'Horizon UI Free', progress: '10.8%', quantity: 1485, date: '21 Feb 2021' },
  { name: 'Weekly Update', progress: '21.3%', quantity: 1024, date: '13 Mar 2021' },
  { name: 'Venus 3D Asset', progress: '31.5%', quantity: 858, date: '24 Jan 2021' },
  { name: 'Marketplace', progress: '12.2%', quantity: 258, date: '24 Oct 2022' },
]

export function CheckTable() {
  return (
    <div className="bg-card rounded-2xl p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-semibold">Check Table</h3>
        <button className="text-gray-400">•••</button>
      </div>

      <table className="w-full text-sm">
        <thead className="text-gray-400 border-b border-white/10">
          <tr>
            <th className="text-left py-2">NAME</th>
            <th>PROGRESS</th>
            <th>QUANTITY</th>
            <th>DATE</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((row, i) => (
            <tr key={i} className="border-b border-white/5">
              <td className="py-3 flex items-center gap-2 text-white">
                <input type="checkbox" defaultChecked={i !== 0} />
                {row.name}
              </td>
              <td className="text-center text-white">{row.progress}</td>
              <td className="text-center text-white">{row.quantity}</td>
              <td className="text-center text-white">{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CheckTable
