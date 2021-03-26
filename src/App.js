import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Home from "./pages/home/Home";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";


export default class App extends Component {
  render(){
    return (

    <div className="App">
      <Header/>
      <Route path = "/" component = {Home}></Route>
      <Footer/>
    </div>
  )
  };
}