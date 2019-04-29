import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div id="div_header" className="header">
                <h3>SONG SING SANG SUNG {this.props.date}</h3>
            </div>
        )
    };
}

export default Header;