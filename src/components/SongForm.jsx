import React, { Component, Fragment } from "react"

class SongForm extends Component {

    render() {
        let genreList = this.props.genreList;
        let labelList = this.props.labelList;
        let artistList = this.props.artistList;

        return (
            <Fragment>
                <form id="form_song" method="POST">
                    <label>Title</label>
                    <input type="hidden" name="id" id="id" />
                    <input required onChange={this.props.handleChangeData} type="text" className="form-control" name="title" id="title" />
                    <label>Artist</label>
                    <select required  onChange={this.props.handleChangeData} className="form-control" name="artist" id="artist">
                        <option>--- select ---</option>
                        {
                            artistList.map(artist => {
                                return (
                                    <option key={artist.id.toString()} value={artist.name}>{artist.name}</option>
                                );
                            })
                        }
                    </select>
                    <div id="div_artist_other">
                        <br />
                        <input type="text" placeholder="specify artist" className="form-control" id="artist_other" name="artist_other" />
                    </div>
                    <label>Label</label>
                    <select required onChange={this.props.handleChangeData} className="form-control" name="label" id="label">
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
                    <input required onChange={this.props.handleChangeData} type="text" className="form-control" name="date" id="date" />
                    
                    <label>Genre</label>
                    <select required onChange={this.props.handleChangeData} className="form-control" name="genre" id="genre">
                        <option>--- select ---</option>
                        {
                            genreList.map(genre => {
                                return (
                                    <option key={genre.id.toString()} value={genre.name}>{genre.name}</option>
                                );
                            })
                        }
                    </select>
                    <br />
                </form>
                <button id="btnSave" className="btn btn-primary" onClick={this.props.saveUpdatedSong}>Save</button>&nbsp;&nbsp;
                <button id="btnCancelEdit" className="btn btn-danger" onClick={this.props.cancelEdit}>Cancel</button>
                <button id="btnAdd" className="btn btn-primary" onClick={this.props.addSong}>Add</button>&nbsp;&nbsp;
                <button className="btn btn-warning" onClick={this.props.clearForm}>Reset</button>
            </Fragment>
        );
    }
}

export default SongForm;