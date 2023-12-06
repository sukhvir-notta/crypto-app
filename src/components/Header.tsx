import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <h1
      className="cursor-pointer"
      onClick={() => {
        navigate("/");
      }}
    >
      Crypto App
    </h1>
  );
};

export default Header;
