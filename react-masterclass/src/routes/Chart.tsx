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

  const exceptData = data ?? [];
  const chartData = exceptData?.map((i) => {
    return {
      x: i.time_close,
      y: [i.open, i.high, i.low, i.close].map((item) => parseFloat(item)),
    };
  });

  return (
    <div>
      {isLoading ? (
        'Loading chart...'
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: chartData,
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
              type: 'solid',
            },
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)} `,
              },
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: '#fbc531',
                  downward: '#9c88ff',
                },
                wick: {
                  useFillColor: true,
                },
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
