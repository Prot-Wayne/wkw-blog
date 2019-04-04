import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Protectedroute from './components/helper/Protectedroute'

import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Categories from './components/categories/Categories'
import Addcategory from './components/categories/Addcategory'
import Posts from './components/posts/Posts'
import Videos from './components/videos/Videos'
import Addpost from './components/posts/Addpost'
import Addcomment from './components/videos/Addcomment'
import Login from './components/users/Login'
import Home from './components/pages/Home'
import Adduser from './components/users/Adduser';

import { Provider } from 'react-redux'
import store from './store'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'jquery/dist/jquery.min.js'
import 'font-awesome/css/font-awesome.min.css'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';




class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Protectedroute exact path="/blog" component={Categories} />
                <Protectedroute exact path="/videos" component={Videos} />
                <Protectedroute exact path="/videos/addcomment" component={Addcomment} />
                <Protectedroute exact path="/blog/addcategory" component={Addcategory} />
                <Protectedroute exact path="/blog/category/:id" component={Posts} />
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Adduser} />
                <Protectedroute exact path="/blog/category/:id/addpost" component={Addpost} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
        <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_LEFT} />
      </Provider>
    );
  }
}

export default App;
