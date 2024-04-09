import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ data }) => {
  const chartRef = useRef(null);
  
  useEffect(() => {
    if (chartRef.current) {
      // Destruir o gráfico anterior se existir
      if (chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }
      
      // Criar um novo gráfico de barra
      const ctx = chartRef.current.getContext('2d');
      chartRef.current.chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: [{
            label: 'Quantidade',
            data: data.values,
            backgroundColor: ['#1F438C', '#2173A6', '#39A7BF', '#1B8C42', '#37A63E'], // Cores personalizadas
          }],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default BarChart;
