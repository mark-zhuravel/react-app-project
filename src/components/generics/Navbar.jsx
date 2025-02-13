import { NavLink } from "react-router-dom";

const Navbar = ({ direction, textWeight }) => {
  return (
    <nav className={`flex leading-none ${direction === "vertical" ? "flex-col space-y-5" : "flex-row space-x-10 items-center"}`}>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          `transition-colors duration-300 ${textWeight} ${isActive ? "text-[#2C36F2]" : "text-[#707C87]"}`
        }
      >
        Послуги
      </NavLink>
      <NavLink
        to="/converter"
        className={({ isActive }) =>
          `transition-colors duration-300 ${textWeight} ${isActive ? "text-[#2C36F2]" : "text-[#707C87]"}`
        }
      >
        Конвертер валют
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `transition-colors duration-300 ${textWeight} ${isActive ? "text-[#2C36F2]" : "text-[#707C87]"}`
        }
      >
        Контакти
      </NavLink>
      <NavLink
        to="/questions"
        className={({ isActive }) =>
          `transition-colors duration-300 ${textWeight} ${isActive ? "text-[#2C36F2]" : "text-[#707C87]"}`
        }
      >
        Задати питання
      </NavLink>
    </nav>
  );
};

export default Navbar;