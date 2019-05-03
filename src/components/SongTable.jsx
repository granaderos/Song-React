import React, { Component } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from 'jquery';
window.$ = window.jQuery = $;

// const base_api = 'http://localhost:8080/rest-song/rest';

class SongTable extends Component {

    editSong = songId => {
        this.props.getSong(songId, "edit");

        $("#btnSave").show();
        $("#btnCancelEdit").show();
        $("#btnAdd").hide();
    }

    render() {
        var songList = this.props.songList;
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Label</th>
                        <th>Date</th>
                        <th>Genre</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="tbody_songs">
                    {
                        songList.map(song => {
                            return (
                                <tr key={song.id.toString()} id={"song_"+song.id}>
                                    <td>{song.title}</td>
                                    <td>{song.artist}</td>
                                    <td>{song.label}</td>
                                    <td>{song.date}</td>
                                    <td>{song.genre}</td>
                                    <td>
                                        <i title="delete" onClick={() => this.props.deleteSong(song.id)}>
                                            <FontAwesomeIcon icon="trash" />
                                        </i> 
                                        {/* <i title="edit"> */}
                                        <i title="edit" onClick={() => this.editSong(song.id)}>
                                            <FontAwesomeIcon icon="edit" />
                                        </i>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        );
    }
}

export default SongTable;