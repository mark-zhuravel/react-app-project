import logo from "/src/assets/images/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Link 
        to="/" 
        className="text-xl font-bold text-[#1F1E25]"
        style={{ fontFamily: '"Work Sans", sans-serif' }} 
      >
        Чіп Чендж
      </Link>
    </div>
  );
};

export default Logo;