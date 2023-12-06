import { Link } from "react-router-dom";

const Header = () => {
  return (
    <h1 className="cursor-pointer">
      <Link to="/" className="text-inherit hover:text-inherit">
        Crypto App
      </Link>
    </h1>
  );
};

export default Header;
