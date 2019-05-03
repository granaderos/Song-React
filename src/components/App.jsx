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

library.add(faStroopwafel)
library.add(faTrash)
library.add(faEdit)
window.$ = window.jQuery = $;

const base_api = 'http://localhost:8080/rest-song/rest';

const config = {
  headers : {
      'Content-Type' : 'application/json'
  }
}

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
      song: {
        id: null,
        title: '',
        artist: '',
        label: '',
        date: '',
        genre: ''
      }
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
    
    this.getSongs();  
    this.getGenres();
    this.getArtists();
    this.getLabels();

    $("#btnSave").hide();
    $("#btnCancelEdit").hide();

  }

  // Service methods

  clearForm = () => {
    $("#id").val("");
    $("#title").val("");
    $("#artist").val("--- select ---");
    $("#label").val("--- select ---");
    $("#date").val("");
    $("#genre").val("--- select ---");

  }

  handleChangeData = e => {
    const {name, value} = e.target;

    this.setState((prevState) => ({
      song: {
        ...prevState.song,
        [name]: value
      }
    }));
  }

  addSong = (e) => {
    e.preventDefault();

    var songToAdd = this.state.song;
    axios.post(base_api+"/songs/add", songToAdd, config)
      .then(
        () => {
          this.getSongs();
          this.clearForm();
        }
      );
  }

  saveUpdatedSong = (e) => {
    e.preventDefault();
    
    console.log("New song data = " + JSON.stringify(this.state.song));
    axios.put(base_api+"/songs/update", this.state.song, config)
      .then(
        () => {
          this.getSongs();

          $("#btnSave").hide();
          $("#btnCancelEdit").hide();
          $("#btnAdd").show();
          this.clearForm(); 
        }
      );
  }

  deleteSong = songId => {
    console.log("SONG TO DELETE " + songId)
    axios.delete(base_api+"/songs/delete/"+songId)
      .then(res => {
        console.log("DELETED song with ID " + songId + " response = " + JSON.stringify(res));
        this.getSongs();  
      });
  }

  getSong = (songId, action) => {
    axios.get(base_api+"/songs/"+songId)
      .then(res => {
        var song = res.data;
        this.setState({song: song});
        console.log("set song inside then = " + JSON.stringify(this.state.song));

        if(action == "edit") {
          // set song details as form values
          $("#id").val(song.id);
          $("#title").val(song.title);
          $("#artist").val(song.artist);
          $("#label").val(song.label);
          $("#date").val(song.date);
          $("#genre").val(song.genre);

          $("#btnSave").show();
          $("#btnCancelEdit").show();
          $("#btnAdd").hide();
        }

      });
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
        <Body clearForm={this.clearForm} 
              saveUpdatedSong={this.saveUpdatedSong} 
              addSong={this.addSong} 
              handleChangeData={this.handleChangeData}
              getSong={this.getSong} 
              getSongs={this.getSongs} 
              deleteSong={this.deleteSong} 
              songList={this.state.songList} 
              genreList={this.state.genreList} 
              labelList={this.state.labelList} 
              artistList={this.state.artistList}  />
        <Footer />
      </div>
    );
  }
}

export default App;
