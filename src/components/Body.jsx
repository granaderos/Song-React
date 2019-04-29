import React, { Component } from "react"

class Body extends Component {
    render() {
        let songList = this.props.songList;

        return (
            <div id="div_content" className="container container-fluid">
                <br />
                <div className="row">
                    <div className="col-md-5">
                        <h3>Add Song</h3>
                        <form id="form_song">
                            <label>Title</label>
                            <input required type="text" className="form-control" name="title" id="title" />
                            <label>Artist</label>
                            <select required className="form-control" name="artist" id="artist">
                                <option>--- select ---</option>
                            </select>
                            <div id="div_artist_other">
                                <br />
                                <input type="text" placeholder="specify artist" className="form-control" id="artist_other" name="artist_other" />
                            </div>
                            <label>Label</label>
                            <select required className="form-control" name="label" id="label">
                                <option>--- select ---</option>
                            </select>
                            <div id="div_label_other">
                                <br />
                                <input type="text" placeholder="specify label" className="form-control" id="label_other" name="label_other" />
                            </div>
                            <label>Release Date</label>
                            <input required type="text" className="form-control" name="date" id="date" />
                            
                            <label>Genre</label>
                            <select multiple required className="form-control" name="genre" id="genre">
                            </select>
                            <br />
                            <input type="submit" className="btn btn-primary" />
                            <input type="reset" className="btn btn-warning" />
                        </form>
                    </div>

                    <div className="col-md-6">
                        <h3>List of Songs</h3>
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
                    </div>
                </div>
                <br />
            </div>
        );
    };
}

export default Body;