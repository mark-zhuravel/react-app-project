import Navbar from "./generics/Navbar.jsx";
import account from "../assets/images/account.svg";
import Logo from "./generics/Logo.jsx";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="bg-[#F6F7FF] py-[34px]">
      <div className="w-[86%] mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-20">
            <Logo/>
            <Navbar/>
          </div>
          <div className="flex space-x-4">
            <Link to="#"><img src={account} alt="account" /></Link>
            <Link to="#" className="text-[#1F1E25]">Особистий кабінет</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;