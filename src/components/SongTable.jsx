import React, { Component } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SongTable extends Component {

    render() {
        var songList = this.props.songList;
        return (
            <table id="table_songs" className="table table-hover">
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
                                        <i title="edit" onClick={() => this.props.getSong(song.id, "edit")}>
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