import './Header.scss';
import logo from "../../img/logo.svg";
import logoHyup from "../../img/logo-hyip.svg";


function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" width={160} height={50} className="header__logo"></img>
      <img src={logoHyup} alt="logo hyip" width={96} height={27} className="header__logo header__logo_hyip"></img>
    </header>
  );
}

export default Header;
