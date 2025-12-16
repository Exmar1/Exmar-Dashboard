import { Bar, BarChart, ResponsiveContainer } from 'recharts'

const data = [
  { v: 400 },
  { v: 600 },
  { v: 800 },
  { v: 400 },
  { v: 900 },
  { v: 1000 },
  { v: 600 },
]

export function DailyTraffic() {
  return (
    <div className="bg-card rounded-2xl p-6 h-full">
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-gray-400 text-sm">Daily Traffic</p>
          <h3 className="text-white text-2xl font-bold">
            2.579 <span className="text-sm font-normal">Visitors</span>
          </h3>
        </div>
        <span className="text-green-500 text-sm">+2.45%</span>
      </div>

      <div className="h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <Bar dataKey="v" fill="#6366f1" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default DailyTraffic
