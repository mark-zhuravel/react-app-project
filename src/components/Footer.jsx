import Navbar from "./generics/Navbar.jsx";
import Logo from "./generics/Logo.jsx";
import smartphone from "../assets/images/smartphone.svg";
import phone from "../assets/images/phone.svg";
import icons from "../assets/images/icons.svg";
import PhoneNumber from "./generics/PhoneNumber.jsx";

const Footer = () => {
  return (
    <footer className="bg-[#F6F7FF] text-[#707C87]">
      <div className="w-[86%] mx-auto flex justify-between py-[60px]">
        <div className="flex flex-col space-y-5">
          <Logo />
          <p className="text-xs"> 
            04128, м.Київ, вул. Хрещатик, 19 <br />
            Ліцензія НБУ №156 <br />
            Ⓒ ПАТ ЧіпЧендж, 2019-2023
          </p>
        </div>
        <Navbar direction="vertical" textWeight="font-medium"/>
        <PhoneNumber 
          icon={smartphone} 
          number="3773" 
          description="Цілодобова підтримка" 
        />
        <PhoneNumber 
          icon={phone} 
          number="8 800 111 22 33" 
          description="Безкоштовно для дзвінків межах України"
        />
        <img src={icons} alt="icons" className="h-4 w-[102px]"/>
      </div>
    </footer>
  );
};

export default Footer;