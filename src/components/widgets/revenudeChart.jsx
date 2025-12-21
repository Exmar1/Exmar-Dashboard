import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { revenueData } from '../../data/dataCharts'
 revenueData

export function RevenueLineChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={revenueData}>
          <XAxis
            dataKey="month"
            stroke="#64748b"
            tickLine={false}
            axisLine={false}
          />
          <YAxis hide />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#6366f1" 
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="cost"
            stroke="#38bdf8" 
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}