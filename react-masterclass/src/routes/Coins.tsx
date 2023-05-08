import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchCoins } from '../api';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isDarkAtom } from '../atoms';

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CoinsList = styled.ul``;
const Coin = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  border: 1px solid white;
  margin-bottom: 10px;
  a {
    transition: color 0.2s ease-in;
    padding: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;
const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
interface ICoinsProps {}

const Coins = ({}: ICoinsProps) => {
  // const [coins, setCoins] = useState<CoinInterface[]>([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     // const response = await fetch('https://api.coinpaprika.com/v1/coins');
  //     // const json = await response.json();
  //     // setCoins(json.slice(0, 100));
  //     // const response2 = await axios.get('https://api.coinpaprika.com/v1/coins');
  //     // setCoins(response.data.slice(0, 100));
  //     // setLoading(false);
  //     // console.log('response : ', response);
  //     // console.log('response2 : ', response2);
  //     // console.log('json : ', json);
  //   })();
  // }, []);

  const { isLoading, data } = useQuery<CoinInterface[]>('allCoins', fetchCoins);
  const coins = data?.slice(0, 100);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  return (
    <Container>
      <Header>
        <Title>coins</Title>
        <button onClick={toggleDarkAtom}>Toggle Dark Mode</button>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {coins?.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={coin}>
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  alt="coinImg"
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
};

export default Coins;
