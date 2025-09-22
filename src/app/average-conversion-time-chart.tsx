
'use client';

import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';

export default function AverageConversionTimeChart({ timeInDays }: { timeInDays: number }) {
  const data = [{ name: 'Conversion Time', value: timeInDays }];

  return (
    <ResponsiveContainer width="100%" height={150}>
      <RadialBarChart
        innerRadius="80%"
        outerRadius="100%"
        barSize={10}
        data={data}
        startAngle={90}
        endAngle={-270}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, Math.max(timeInDays, 30)]} // Ensure a reasonable max value
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          background
          dataKey="value"
          cornerRadius={10}
          fill="hsl(var(--primary))"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-foreground text-3xl font-bold"
        >
          {timeInDays}
        </text>
        <text
          x="50%"
          y="65%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-muted-foreground text-sm"
        >
          Days
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
}
