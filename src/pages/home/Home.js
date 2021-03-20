import React, {Component} from 'react';
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import "./Home.scss";

export default class Home extends Component {
  render(){
    return (
      <div className="home">
        <Header/>
        <div className="main">
        main
        </div>
        <Footer/>
      </div>
    )
  };
}