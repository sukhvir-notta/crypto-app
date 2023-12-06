import { useNavigate } from "react-router-dom";
import { CoinRowProps } from "../common/types";
import {
  marketCapFormatter,
  percentFormatter,
  priceFormatter,
} from "../common/utils";

const CoinRow = ({
  id,
  marketRank,
  image,
  name,
  symbol,
  price,
  marketCap,
  priceChange,
}: CoinRowProps) => {
  const navigate = useNavigate();

  return (
    <tr
      className="cursor-pointer"
      onClick={() => {
        navigate(`${id}`);
      }}
    >
      <td>{marketRank}</td>
      <td className="flex flex-row gap-3">
        <img src={image} alt={name} width={25} height={25} />
        <span>
          {name} {symbol.toUpperCase()}
        </span>
      </td>
      <td>{priceFormatter.format(price)}</td>
      <td>{percentFormatter.format(priceChange / 100)}</td>
      <td>{marketCapFormatter.format(marketCap)}</td>
    </tr>
  );
};

export default CoinRow;
