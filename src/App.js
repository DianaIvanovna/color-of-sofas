import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/settings";

export default class App extends Component {
  // state : {

  // }
  linksHandler (link) {
    console.log('link', link);
  }

  render(){
    return (

    <div className="App">
      <Header/>
      <div className="main">
        <Switch>
          <Route path = "/settings" component = {Settings}></Route>
          <Route path = "/" component = {Home}></Route>
        </Switch>
      </div>
      <Footer/>
    </div>
  )
  };
}