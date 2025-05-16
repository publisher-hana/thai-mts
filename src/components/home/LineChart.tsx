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
};
export const LineChart = ({ type }: LineChartProps) => {
  const isUp = type === 'up';

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Example Data',
        data: [10, 20, 15, 30, 25],
        borderColor: isUp ? '#008A1D' : '#D92D20', // 초록 or 빨강
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
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

  return <Line data={data} options={options} />;
};
