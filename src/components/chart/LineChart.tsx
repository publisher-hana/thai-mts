// LineChart.tsx
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import { Line } from 'react-chartjs-2';

// Chart.js에 필요한 컴포넌트 등록
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
type LineChartProps = {
  type ?: 'up' | 'down';
  data?: number[];
  labels?: string[];
  borderWidth?: number;
  w?: number;
  h?: number;
  res? : boolean
};
export const LineChart = ({ type, data, labels, borderWidth, w, h, res }: LineChartProps) => {
  const isUp = type === 'up';

  const chartData = {
    labels: labels ?? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Example Data',
        data: data ?? [10, 20, 15, 30, 25], // 데이터가 없으면 기본값 사용
        borderColor: isUp ? '#008A1D' : '#D92D20', // 초록 or 빨강
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        tension: 0.4,
        borderWidth: borderWidth, 
        pointRadius: 0, 
      },
    ],
  };

  const options = {
    responsive: res ?? true,
    plugins: {
      legend: {
        display: false
      },
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    },
  };

  return <Line data={chartData} options={options} width={w} height={h}/>;
};
