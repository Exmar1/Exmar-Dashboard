import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Your files', value: 63 },
  { name: 'System', value: 25 },
  { name: 'Other', value: 12 },
]

const COLORS = ['#6366f1', '#38bdf8', '#e5e7eb']

export function PieStats() {
  return (
    <div className="dark:bg-card bg-white rounded-2xl p-6 h-full shadow-md transition-colors duration-300">
      <div className="flex justify-between mb-4">
        <h3 className="dark:text-white text-gray-900 font-semibold">Your Pie Chart</h3>
        <span className="dark:text-gray-400 text-gray-600 text-sm">Monthly</span>
      </div>

      <div className="h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={50}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 space-y-2 text-sm">
        {data.map((item, i) => (
          <div key={i} className="flex justify-between dark:text-white text-gray-900">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: COLORS[i] }} />
              {item.name}
            </span>
            <span>{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PieStats