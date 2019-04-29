import React, { Component } from 'react';
import '../css/App.css';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Body from "./Body.jsx";

import {
  getUserList,
  getSongs
} from "../util/service_helper";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      userList: [],
      songList: []
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    
    this.getUsers();
    this.getSongs();
    
  }

  // Service methos

  getUsers() {
    getUserList().then(res => {
      console.log("Response = " + res)
      this.setState({userList : res.data.data});
      console.log("USERS = " + this.state.userList)
    })
  }

  getSongs() {
    getSongs().then(res => {
      console.log("Songs: " + JSON.stringify(res.data));
      this.setState({songList: res.data});
    })
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <Header date={this.state.date.toLocaleTimeString() } />
        <Body songList={this.state.songList} />
        <Footer />
      </div>
    );
  }
}

export default App;
