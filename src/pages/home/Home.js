import React, {Component} from 'react';
import "./Home.scss";
import {  emojiHandLeft, emojiHandRight, sofa, backgroundSofa, backgroundSofa2, backgroundSofa3, backgroundHead, head,head2, girl, boy, stars} from "../../assets/images";

export default class Home extends Component {

  goSetting = () => {
    this.props.history.push({
      pathname: '/settings'
    })
  }

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
          <button className="home__button" onClick = {this.goSetting}>Найти свой диван</button>
          <img src={sofa} alt="sofa" className="home__img" width={693} height={649}></img>
          <img src={head2} alt="emoji head" className="home__title-emoji home__title-emoji_sofa"></img>
        </div>
      </div>
    )
  };
}