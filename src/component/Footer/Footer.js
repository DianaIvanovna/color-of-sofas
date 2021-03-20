import './Footer.scss';
import vk from "../../img/vk.svg";
import inst from "../../img/instagram.svg";
import fb from "../../img/fb.svg";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <p className="footer__title"><strong>Цвет Диванов</strong> в соц. сетях</p>
        <div className="footer__links">
          <a href="./" className="footer__link"><img src={vk} alt="icon vk"></img></a>
          <a href="./" className="footer__link"><img src={fb} alt="icon facebook"></img></a>
          <a href="./" className="footer__link"><img src={inst} alt="icon instagram"></img></a>
        </div>
      </nav>
      <p className="footer__signature">Сделано в креативном бюро «Хайп» ©2021</p>
    </footer>
  );
}

export default Footer;
