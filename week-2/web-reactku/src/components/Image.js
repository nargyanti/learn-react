import React, { Component } from "react";
// Class Component Image 

class Image extends Component {
    render() {
        return <img src={this.props.linkImg} alt="Food" width="500" />;
    }
}

export default Image;