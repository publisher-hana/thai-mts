import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
const CandleChart = () => {
   const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark-mode');
      setIsDarkMode(isDark);
    };

    // 초기 확인
    checkTheme();

    // MutationObserver로 클래스 변화 감지
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const textColor = isDarkMode ? '#ECEFF4' : '#344152';

  const series = [{
    data: [
      { x: new Date(2023, 8, 1), y: [33, 34, 32.5, 33.5] }, // [open, high, low, close]
      { x: new Date(2023, 8, 2), y: [33.4, 35, 33, 34.5] },
      { x: new Date(2023, 8, 3), y: [34, 36, 33.5, 35.2] },
      { x: new Date(2023, 8, 4), y: [35, 35.5, 34.2, 34.8] },
      { x: new Date(2023, 8, 5), y: [34, 36, 33.5, 35.2] },
      { x: new Date(2023, 8, 6), y: [35.6, 36.4, 35.0, 36.1] },
      { x: new Date(2023, 8, 7), y: [35, 35.5, 34.2, 34.8] },
      { x: new Date(2023, 8, 8), y: [35.6, 36.4, 35.0, 36.1] },
      { x: new Date(2023, 8, 9), y: [34, 36, 33.5, 35.2] },
      { x: new Date(2023, 8, 10), y: [33.4, 35, 33, 34.5] },
  ]
  }];

  const options = {
    chart: {
      type: 'candlestick',
      toolbar: { show: false },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#008A1D',   // 초록
          downward: '#D92D20', // 빨강
        },
      },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          fontWeight: 'normal',
           colors: textColor, 
        },
        format: 'dd', // '10', '11' 이런 식으로 날짜만
      },
      axisBorder: {
        color: '#E0E0E0',
      },
      axisTicks: {
        color: '#E0E0E0',
      },
    },
    yaxis: {
      opposite: true, 
      labels: {
        style: {
          fontWeight: 'normal',
          colors: [textColor], 
        },
        formatter: (val: number) => `x,${val.toFixed(2)}`,
      },
      axisBorder: {
        color: '#E0E0E0',
      },
      axisTicks: {
        color: '#E0E0E0',
      },
    },
    grid: {
      borderColor: '#F0F0F0',
      strokeDashArray: 4,
    },
  };

  return <Chart options={options} series={series} type="candlestick" height={300} />;
};

export default CandleChart;