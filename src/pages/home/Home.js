import React, {Component} from 'react';
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import "./Home.scss";
import emojiHandLeft from "../../img/emoji-hand-left.png";
import emojiHandRight from "../../img/emoji-hand-right.png";
import sofa from "../../img/home-sofa.png";

export default class Home extends Component {
  render(){
    let homeDescriptionBlock
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
            <p className="home__title">найди <span className="home__title_attention">свой</span></p>
            <p className="home__title home__title_reverse">идеальный</p>
            <p className="home__title"><span className="home__title_attention">диван</span></p>
          </div>

          {homeDescriptionBlock}

          <button className="home__button">Найти свой диван</button>

          <img src={sofa} alt="sofa" className="home__img" width={693} height={649}></img>

        </div>
        <Footer/>
      </div>
    )
  };
}