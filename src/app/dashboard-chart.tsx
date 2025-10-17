'use client';

import { useRouter } from 'next/navigation';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const statusColors: { [key: string]: string } = {
  New: 'hsl(var(--chart-1))',
  'In Discussion': 'hsl(var(--chart-2))',
  Negotiation: 'hsl(var(--chart-3))',
  'Closed - Won': 'hsl(var(--chart-4))',
  'Closed - Lost': 'hsl(var(--chart-5))',
};

type ChartData = {
    name: string;
    value: number;
}

// Map display names to actual status values for filtering
const statusMapping: { [key: string]: string } = {
  'New': 'New',
  'Discussion': 'In Discussion',
  'Negotiation': 'Negotiation',
  'Won': 'Closed - Won',
  'Lost': 'Closed - Lost',
};

const statusToColor = (status: string) => {
    if (status === 'Discussion') return statusColors['In Discussion'];
    if (status === 'Won') return statusColors['Closed - Won'];
    if (status === 'Lost') return statusColors['Closed - Lost'];
    return statusColors[status] || '#8884d8';
  };

export default function DashboardChart({ data }: { data: ChartData[] }) {
  const router = useRouter();

  const handleBarClick = (data: any) => {
    if (data && data.activePayload && data.activePayload.length > 0) {
      const statusName = data.activePayload[0].payload.name;
      const actualStatus = statusMapping[statusName] || statusName;
      // Navigate to leads page with status filter
      router.push(`/leads?status=${encodeURIComponent(actualStatus)}`);
    }
  };

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} onClick={handleBarClick} style={{ cursor: 'pointer' }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip
          cursor={{ fill: 'hsl(var(--muted))' }}
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            border: '1px solid hsl(var(--border))',
          }}
        />
        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={statusToColor(entry.name)}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
