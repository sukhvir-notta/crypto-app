import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { CoinInterface } from "../common/types";
import CoinRow from "./CoinRow";
import { useState } from "react";

const CoinTable = () => {
  const [coinSearch, setCoinSearch] = useState("");

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["coins"],
    queryFn: async () => {
      return await Axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=50"
      ).then((res) => res.data);
    },
  });

  if (isPending) return <p>Loading...</p>;

  if (isError) return <p>An error has occurred: {error.message}</p>;

  return (
    <>
      <input
        className="my-8 w-6/12"
        placeholder="Search name"
        value={coinSearch}
        onChange={(e) => {
          setCoinSearch(e.target.value);
        }}
      />
      <table className="table-auto w-full border-separate border-spacing-y-6">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h %</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((coin: CoinInterface) =>
              coin.name.toLowerCase().includes(coinSearch.toLowerCase())
            )
            .map((coin: CoinInterface) => (
              <CoinRow
                key={coin.id}
                id={coin.id}
                marketRank={coin.market_cap_rank}
                image={coin.image}
                name={coin.name}
                symbol={coin.symbol}
                price={coin.current_price}
                marketCap={coin.market_cap}
                priceChange={coin.price_change_percentage_24h}
              />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default CoinTable;
