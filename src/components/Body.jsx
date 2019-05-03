import React, { Component } from "react"
import SongForm from "./SongForm"
import SongTable from "./SongTable"

class Body extends Component {
    render() {
        return (
            <div id="div_content" className="container container-fluid">
                <br />
                <div className="row">
                    <div className="col-md-5">
                        <h3>Add Song</h3>
                        <SongForm saveUpdatedSong={this.props.saveUpdatedSong} addSong={this.props.addSong} handleChangeData={this.props.handleChangeData} getSongs={this.props.getSongs} genreList={this.props.genreList} labelList={this.props.labelList} artistList={this.props.artistList} />
                    </div>

                    <div className="col-md-6">
                        <h3>List of Songs</h3>
                        <SongTable song={this.props.song} getSong={this.props.getSong} deleteSong={this.props.deleteSong} songList={this.props.songList} />
                    </div>
                </div>
                <br />
            </div>
        );
    };
}

export default Body;