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
                        <SongForm 
                            clearForm={this.props.clearForm} 
                            saveUpdatedSong={this.props.saveUpdatedSong} 
                            cancelEdit={this.props.cancelEdit}
                            addSong={this.props.addSong} 
                            handleChangeData={this.props.handleChangeData} 
                            genreList={this.props.genreList} 
                            labelList={this.props.labelList} 
                            artistList={this.props.artistList} />
                    </div>

                    <div className="col-md-6">
                        <h3>List of Songs</h3>
                        <SongTable 
                            getSong={this.props.getSong} 
                            deleteSong={this.props.deleteSong} 
                            songList={this.props.songList} />
                    </div>
                </div>
                <br />
            </div>
        );
    };
}

export default Body;