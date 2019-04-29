import React, { Component } from 'react';
import '../css/App.css';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Body from "./Body.jsx";

import {
  getSongs,
  getGenres,
  getArtists,
  getLabels
} from "../util/service_helper";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      userList: [],
      songList: [],
      genreList: [],
      artistList: [],
      labelList: []
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    
    this.getSongs();  
    this.getGenres();
    this.getArtists();
    this.getLabels();
  }

  // Service methods
  getSongs() {
    getSongs().then(res => {
      console.log("Songs: " + JSON.stringify(res.data));
      this.setState({songList: res.data});
    });
  }

  getGenres() {
    getGenres().then(res => {
      this.setState({genreList: res.data});
    });
  }

  getArtists() {
    getArtists().then(res => {
      this.setState({artistList: res.data});
    });
  }

  getLabels() {
    getLabels().then(res => {
      this.setState({labelList: res.data});
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
        <Body songList={this.state.songList} genreList={this.state.genreList} labelList={this.state.labelList} artistList={this.state.artistList}  />
        <Footer />
      </div>
    );
  }
}

export default App;
