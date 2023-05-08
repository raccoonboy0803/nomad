import { useQuery } from 'react-query';
import React from 'react';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../atoms';

interface IHistory {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}
interface ChartProps {
  coinId: string;
}
const Chart = ({ coinId }: ChartProps) => {
  const isDarkMode = useRecoilValue(isDarkAtom);

  const { isLoading, data } = useQuery<IHistory[]>(['ohlcv', coinId], () =>
    fetchCoinHistory(coinId)
  );

  return (
    <div>
      {isLoading ? (
        'Loading chart...'
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: 'price',
              data: data?.map((price) => parseFloat(price.close)) ?? [],
            },
          ]}
          options={{
            theme: { mode: isDarkMode ? 'dark' : 'light' },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: 'tranparent',
            },
            yaxis: { show: false },
            xaxis: {
              axisBorder: { show: false },
              labels: { show: false },
              axisTicks: { show: false },
              type: 'datetime',
              categories:
                data?.map((price) =>
                  new Date(price.time_close * 1000).toUTCString()
                ) ?? [],
            },
            grid: { show: false },
            stroke: {
              curve: 'smooth',
            },
            fill: {
              type: 'gradient',
              gradient: { gradientToColors: ['violet'], stops: [0, 100] },
            },
            colors: ['beige'],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)} `,
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
