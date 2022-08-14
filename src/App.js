import React, { Component } from 'react';
import Home from './pages/home';
import Services from './pages/services';
import Products from './pages/products';
import Navbar from './components/navbar';
import Login from './pages/login';
import About from './pages/about';
import Logout from './components/logout';
import Dashboard from './pages/dashboard';
import { Route, Switch, Redirect } from "react-router-dom";
import Protect from "./components/protect";

class App extends Component {
  state = {
    user: null,
  }

  componentDidMount = async ()=>{
    const token = localStorage.getItem('token');

    if(!token){
      this.setState({user: null});
      return;
    }

    if(token){
      this.setState({user: token});
    }
  }
  render() {
    return (
      <>
        <Navbar user={this.state.user} />
        <Switch>
            <Route path="/services" component={Services} />
            <Route path="/products" component={Products} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/logout" component={Logout} />
            {/* <Protect path="/dashboard" component={Dashboard} /> */}
            <Route path="/" exact component={Home} />
        </Switch>
      </>
    );
  }
}

export default App;
