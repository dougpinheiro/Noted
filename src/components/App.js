import React, { Component } from 'react';
import Login from './Login/Login'
import Main from './Main/Main'
import './App.css'

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      ...this.state,
      mainVisibility : {"display" : "none"}
    }
    this.handleLogin = this.handleLogin.bind(this);
  }
  
  handleLogin(){
    this.setState({
      ...this.state,
      mainVisibility : {"display" : "block"}
    });
  }

  render(){
    return (
      <div className="App"> 
        <Login handleLogin={this.handleLogin}/>
        <Main mainVisibility={this.state.mainVisibility}/>
      </div>
    )
  }
}
 