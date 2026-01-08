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

// Different color scheme for sources
const sourceColors = [
  'hsl(var(--chart-1))',
  'hsl(var(--chart-2))',
  'hsl(var(--chart-3))',
  'hsl(var(--chart-4))',
  'hsl(var(--chart-5))',
  '#8884d8',
  '#82ca9d',
  '#ffc658',
  '#ff7c7c',
  '#8dd1e1',
];

type SourceChartData = {
    name: string;
    count: number;
}

export default function SourceDistributionChart({ data }: { data: SourceChartData[] }) {
  const router = useRouter();

  const handleBarClick = (barData: any) => {
    const sourceName = barData?.payload?.name;
    if (!sourceName) return;

    // Store selected source for client-side filtering on the leads page
    if (typeof window !== 'undefined') {
      try {
        window.sessionStorage.setItem('leadsSourceFilter', sourceName);
      } catch {
        // Ignore storage errors and just navigate
      }
    }

    // Navigate to leads page without URL query filters
    router.push('/leads');
  };

  const getSourceColor = (index: number) => {
    return sourceColors[index % sourceColors.length];
  };

  // Handle empty data case
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-[350px] text-muted-foreground">
        No source data available
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} style={{ cursor: 'pointer' }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          angle={-45}
          textAnchor="end"
          height={80}
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
        <Bar dataKey="count" radius={[4, 4, 0, 0]} onClick={handleBarClick}>
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={getSourceColor(index)}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}