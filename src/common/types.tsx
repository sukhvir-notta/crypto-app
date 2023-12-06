export interface CoinInterface {
  id: string;
  market_cap_rank: number;
  name: string;
  current_price: number;
  market_cap: number;
  image: string;
  symbol: string;
  price_change_percentage_24h: number;
}

export interface CoinRowProps {
  id: string;
  marketRank: number;
  name: string;
  price: number;
  marketCap: number;
  image: string;
  symbol: string;
  priceChange: number;
}
