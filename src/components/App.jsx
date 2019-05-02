import React, { Component } from 'react';
import axios from 'axios';

import '../css/App.css';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Body from "./Body.jsx";

import $ from 'jquery';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'


import {
  getSongs,
  getGenres,
  getArtists,
  getLabels
} from "../util/service_helper";
import { timingSafeEqual } from 'crypto';

library.add(faStroopwafel)
library.add(faTrash)
library.add(faEdit)
window.$ = window.jQuery = $;

const base_api = 'http://localhost:8080/rest-song/rest/';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      userList: [],
      songList: [],
      genreList: [],
      artistList: [],
      labelList: [],
      song: {}
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

  deleteSong = songId => {
    console.log("SONG TO DELETE " + songId)
    axios.delete(base_api+"songs/delete/"+songId)
      .then(function(res) {
        console.log("DELETED song with ID " + songId + " response = " + res)
        $("#song_"+songId).remove();
      });
  }

  getSong = songId => {
    axios.get(base_api+"songs/"+songId)
      .then(res => {
        this.setState({song: res.data});
      })
      return this.state.song;
  }

  getSongs = () => {
    getSongs().then(res => {
      this.setState({songList: res.data});
    });
  }

  getGenres = () => {
    getGenres().then(res => {
      this.setState({genreList: res.data});
    });
  }

  getArtists = () => {
    getArtists().then(res => {
      this.setState({artistList: res.data});
    });
  }

  getLabels = () => {
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
        <Body getSong={this.getSong} getSongs={this.getSongs} deleteSong={this.deleteSong} songList={this.state.songList} genreList={this.state.genreList} labelList={this.state.labelList} artistList={this.state.artistList}  />
        <Footer />
      </div>
    );
  }
}

export default App;
