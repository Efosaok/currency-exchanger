import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import useHistoricalRates from '../hooks/useHistoricalRates';

import './historicalRates.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HistoricalRates = () => {
  const { loading, data, options } = useHistoricalRates();

  return (
    <div className='historical-rates'>
      <div className='bar-chart-wrap'>
        {loading ? (
          <div className='loading-wrap'><p>Historical Rates</p></div>
        ) : (<Bar data={data} options={options} />)}
      </div>
    </div>
  );
}

export default HistoricalRates;
