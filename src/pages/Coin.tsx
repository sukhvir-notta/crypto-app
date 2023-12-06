import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { priceFormatter } from "../common/utils";
import purify from "dompurify";

const Coin = () => {
  const { id } = useParams();
  const { isPending, isError, data, error } = useQuery({
    queryKey: [`${id}`],
    queryFn: async () => {
      return await Axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}`
      ).then((res) => res.data);
    },
  });

  if (isPending) return <p>Loading...</p>;

  if (isError) return <p>An error has occurred: {error.message}</p>;

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-3 items-center py-8">
          <img src={data.image.small} alt={data.name} />
          <p className="text-3xl font-bold ">{data.name}</p>
        </div>
        <p className="text-3xl">
          {priceFormatter.format(data.market_data.current_price.gbp)}
        </p>
      </div>
      <p className="text-xl font-bold text-left py-2">About {data.name}</p>
      <div
        className="text-left"
        dangerouslySetInnerHTML={{
          __html: purify.sanitize(data.description.en),
        }}
      />
    </>
  );
};

export default Coin;
