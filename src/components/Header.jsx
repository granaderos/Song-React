import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div id="div_header" className="header">
                <span className="pull-right"> {this.props.date}</span>
                <h3>SONG SING SANG SUNG</h3>
            </div>
        )
    };
}

export default Header;