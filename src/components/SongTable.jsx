import React, { Component } from "react"

class SongTable extends Component {
    render() {
        let songList = this.props.songList;
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Label</th>
                        <th>Date</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody id="tbody_songs">
                    {
                        songList.map(song => {
                            return (
                                <tr>
                                    <td>{song.title}</td>
                                    <td>{song.artist}</td>
                                    <td>{song.label}</td>
                                    <td>{song.date}</td>
                                    <td>{song.genre}</td>
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