import React, { Component } from "react"
import axios from "axios";

import $ from 'jquery';
window.$ = window.jQuery = $;

const base_api = 'http://localhost:8080/rest-song/rest';

class SongForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            artist: '',
            label: '',
            date: '',
            genre: '',
            actionTaken: ''
        }

        //this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeArtist = this.onChangeArtist.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onChangeLabel = this.onChangeLabel.bind(this);
    }

    onChangeGenre(e) {
        this.setState({
            genre: e.target.value
        });
    }

    onChangeLabel(e) {
        this.setState({
            label: e.target.value
        });
    }

    onChangeArtist(e) {
        this.setState({ artist: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        var songToAdd = {
            "title": this.state.title,
            "artist": this.state.artist,
            "label": this.state.label,
            "date": this.state.date,
            "genre": this.state.genre
        }

        console.log('sample');
        console.log(this);

        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }
        // console.log("SONG = " + JSON.stringify(songToAdd));
        axios.post(base_api+"/songs/add", songToAdd, config)
        .then(
            res => {
                this.props.getSongs();
                
            }
        );
    }

    render() {
        let genreList = this.props.genreList;
        let labelList = this.props.labelList;
        let artistList = this.props.artistList;

        return (
            <form id="form_song" method="POST" onSubmit={this.handleSubmit}>
                <label>Title</label>
                <input required onChange={(e) => this.setState({title: e.target.value})} type="text" className="form-control" name="title" id="title" />
                <label>Artist</label>
                <select required  onChange={this.onChangeArtist} className="form-control" name="artist" id="artist">
                    <option>--- select ---</option>
                    {
                        artistList.map(artist => {
                            return (
                                <option key={artist.id.toString()} value={artist.name}>{artist.name}</option>
                            );
                        })
                    }
                    <option value="0">Other</option>
                </select>
                <div id="div_artist_other">
                    <br />
                    <input type="text" placeholder="specify artist" className="form-control" id="artist_other" name="artist_other" />
                </div>
                <label>Label</label>
                <select required onChange={this.onChangeLabel} className="form-control" name="label" id="label">
                    <option>--- select ---</option>
                    {
                        labelList.map(label => {
                            return (
                                <option key={label.id.toString()} value={label.name}>{label.name}</option>
                            );
                        })
                    }
                </select>
                <div id="div_label_other">
                    <br />
                    <input type="text" placeholder="specify label" className="form-control" id="label_other" name="label_other" />
                </div>
                <label>Release Date</label>
                <input required onChange={(e) => this.setState({date: e.target.value})} type="text" className="form-control" name="date" id="date" />
                
                <label>Genre</label>
                <select multiple required onChange={this.onChangeGenre} className="form-control" name="genre" id="genre">
                    {
                        genreList.map(genre => {
                            return (
                                <option key={genre.id.toString()} value={genre.name}>{genre.name}</option>
                            );
                        })
                    }
                </select>
                <br />
                <input type="submit" className="btn btn-primary" />&nbsp;&nbsp;
                <input type="reset" className="btn btn-warning" />
            </form>
        );
    }
}

export default SongForm;