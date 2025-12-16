import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Your files', value: 63 },
  { name: 'System', value: 25 },
  { name: 'Other', value: 12 },
]

const COLORS = ['#6366f1', '#38bdf8', '#e5e7eb']

export function PieStats() {
  return (
    <div className="bg-card rounded-2xl p-6 h-full">
      <div className="flex justify-between mb-4">
        <h3 className="text-white font-semibold">Your Pie Chart</h3>
        <span className="text-gray-400 text-sm">Monthly</span>
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
          <div key={i} className="flex justify-between text-white">
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
