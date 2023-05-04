import axios from 'axios';

const BASE_URL = 'https://api.coinpaprika.com/v1';

export const fetchCoins = async () => {
  return await axios.get(`${BASE_URL}/coins`).then((res) => res.data);
};

export const fetchCoinInfo = async (coinId: string | undefined) => {
  return await axios.get(`${BASE_URL}/coins/${coinId}`).then((res) => res.data);
};

export const fetchCoinTickers = async (coinId: string | undefined) => {
  return await axios
    .get(`${BASE_URL}/tickers/${coinId}`)
    .then((res) => res.data);
};

export const fetchCoinHistory = async (coinId: string | undefined) => {
  // const endDate = Math.floor(Date.now() / 1000); //현재
  // const startDate = endDate - 60 * 60 * 24 * 7; //시작
  return await axios
    .get(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`)
    .then((res) => res.data);
};
