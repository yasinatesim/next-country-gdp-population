import React from 'react';
import { Bar } from 'react-chartjs-2';

import { registerables } from 'chart.js';
import Chart from 'chart.js/auto';

Chart.register(...registerables);

import countries from '@/data/countries.json';

const CountryChart = () => {
  const data = {
    labels: countries.countries.map((country) => country.name),
    datasets: [
      {
        label: 'Population',
        data: countries.countries.map((country) => country.population),
        backgroundColor: '#36a2eb',
      },
      {
        label: 'GDP',
        data: countries.countries.map((country) => country.gdp),
        backgroundColor: '#ffcd56',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: 'logarithmic',
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 10,
          callback: (value: number) => {
            if (value >= 1000000000) {
              return (value / 1000000000).toFixed(1) + 'B';
            } else if (value >= 1000000) {
              return (value / 1000000).toFixed(1) + 'M';
            } else if (value >= 1000) {
              return (value / 1000).toFixed(1) + 'K';
            } else {
              return value;
            }
          },
        },
      },
    },
  };

  return <Bar data={data} options={options as object} />;
};

export default CountryChart;
