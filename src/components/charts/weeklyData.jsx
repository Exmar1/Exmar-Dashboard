import {
	Bar,
	BarChart,
	ResponsiveContainer,
	XAxis,
} from 'recharts'

import { weeklyData } from '../../data/dataCharts'

export function WeeklyRevenueChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={weeklyData} barSize={14}>
          <XAxis
            dataKey="day"
            stroke="#64748b"
            tickLine={false}
            axisLine={false}
          />

          <Bar
            dataKey="a"
            stackId="total"
            fill="#6366f1"
            radius={[0, 0, 6, 6]}
          />
          <Bar
            dataKey="b"
            stackId="total"
            fill="#38bdf8"
          />
          <Bar
            dataKey="c"
            stackId="total"
            fill="#e5e7eb"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
