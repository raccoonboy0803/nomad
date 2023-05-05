import { useQuery } from 'react-query';
import React, { useEffect, useState } from 'react';
import { fetchCoinHistory } from '../api';
import { Overview, OverviewItem } from './Coin';

interface PriceProp {
  coinId: string;
}
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
// data.high  data.low  data.open  data.close
const Price = ({ coinId }: PriceProp) => {
  const { isLoading, data } = useQuery<IHistory[]>(['price', coinId], () =>
    fetchCoinHistory(coinId)
  );

  const [low, setlow] = useState(0);
  const [high, sethigh] = useState(0);
  useEffect(() => {
    const calPrice = () => {
      const priceArr: Array<number> = [];

      data?.map((item) => priceArr.push(Number(item.high)));
      data?.map((item) => priceArr.push(Number(item.low)));
      const highest = priceArr.sort((a, b) => a - b).shift();
      const lowest = priceArr.sort((a, b) => a - b).pop();
      return { lowest: lowest, highest: highest };
    };
    const result = calPrice();
    sethigh(result.highest!);
    setlow(result.lowest!);
  }, [data]);

  return (
    <div>
      {isLoading ? (
        'Loading Price...'
      ) : (
        <>
          <p style={{ marginBottom: '15px' }}>During 20Days...</p>
          <Overview style={{ marginBottom: '10px' }}>
            <OverviewItem>
              <span style={{ fontSize: '15px' }}>Lowest Price : {low}</span>
            </OverviewItem>
          </Overview>
          <Overview>
            <OverviewItem>
              <span style={{ fontSize: '15px' }}>Highest Price : {high}</span>
            </OverviewItem>
          </Overview>
        </>
      )}
    </div>
  );
};

export default Price;
