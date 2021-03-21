import React, {Component} from 'react';
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import "./Home.scss";
import emojiHandLeft from "../../img/emoji-hand-left.png";
import emojiHandRight from "../../img/emoji-hand-right.png";
import sofa from "../../img/home-sofa.png";
import backgroundSofa from "../../img/background-sofa.svg";
import backgroundSofa2 from "../../img/background-sofa-2.svg";
import backgroundSofa3 from "../../img/background-sofa-3.svg";
import backgroundHead from "../../img/background-head.svg";
import head from "../../img/emoji-head-1.png";
import head2 from "../../img/emoji-head-2.png";
import girl from "../../img/emoji-girl.png";
import boy from "../../img/emoji-boy.png";
import stars from "../../img/emoji-stars.png";

export default class Home extends Component {
  render(){
    let backgroundImg =
      <div>
        <img src={backgroundSofa} alt="super sofa" className="home__back-img"></img>
        <img src={backgroundSofa2} alt="super sofa" className="home__back-img"></img>
        <img src={backgroundSofa3} alt="super sofa" className="home__back-img"></img>

        <img src={backgroundHead} alt="head" className="home__back-img" width={55} height={55}></img>
        <img src={backgroundHead} alt="head" className="home__back-img" width={168} height={168}></img>
        <img src={backgroundHead} alt="head" className="home__back-img" width={202} height={202}></img>
      </div>;
    let homeDescriptionBlock;
    if (window.innerWidth > 600){
      homeDescriptionBlock = <p className="home__description">
      Познакомься поближе с диваном из твоего города
      с помощью онлайн-дейтинга мягкой мебели,
      который придумали <span className="home__description-attention">Хайп</span> и <span className="home__description-attention">Цвет</span> Диванов.
      Любовь с первого свайпа — теперь реальность! ❤️
    </p>
    } else {
      homeDescriptionBlock = <p className="home__description">
      Познакомься поближе с диваном мечты с помощью онлайн-дейтинга от <span className="home__description-attention">Цвета Диванов</span>. Любовь с первого свайпа — теперь реальность! ❤️
      </p>
    }
    return (
      <div className="home">
        {/* картинки для фона */ window.innerWidth > 1040?backgroundImg:null }
        <Header/>
        <div className="home__container">
          <div className="home__swipe-container">
            <img src={emojiHandLeft} alt="emoji hand left" className="home__emoji" width={52} height={52}></img>
            <a href="./" className="home__swipe-link">Свайп влево</a>
            <span className="home__swipe-space">/</span>
            <a href="./" className="home__swipe-link">свайп вправо</a>
            <img src={emojiHandRight} alt="emoji hand right" className="home__emoji" width={52} height={52}></img>
          </div>

          <div className="home__title-container">
            <p className="home__title">найди
              <img src={head} alt="emoji head" className="home__title-emoji" width={104} height={104}></img>
              <span className="home__title_attention"> свой</span>
            </p>
            <p className="home__title home__title_reverse">
              <img src={girl} alt="emoji girl" className="home__title-emoji"></img>
              идеальный
            </p>
            <p className="home__title">
              <img src={stars} alt="emoji stars" className="home__title-emoji"></img>
              <span className="home__title_attention">диван</span>
              <img src={boy} alt="emoji boy" className="home__title-emoji"></img>
            </p>
          </div>
          {/* вывод описания */}
          {homeDescriptionBlock}
          {/* вывод описания */}
          <button className="home__button">Найти свой диван</button>
          <img src={sofa} alt="sofa" className="home__img" width={693} height={649}></img>
          <img src={head2} alt="emoji head" className="home__title-emoji home__title-emoji_sofa"></img>
        </div>
        <Footer/>
      </div>
    )
  };
}