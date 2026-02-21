import logo3 from "../../assets/logo3.png";
import logo from "../../assets/logo.png";

const Navbar = ({ handleLogoClick = () => {} }) => (
  <nav className="select-none relative flex w-full">
    <div onClick={handleLogoClick} className="cursor-pointer p-1 m-4">
      <img
        src={logo3}
        className="object-contain w-28 animate-animate absolute"
        alt=""
      />
      <img
        src={logo}
        className="object-contain w-28"
        alt=""
      />
    </div>
  </nav>
);

export default Navbar;
