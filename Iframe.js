import React, { Component } from 'react';
import './Iframe.scss';


class Iframe extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <iframe 
                className="component-iframe" 
                width={this.props.width} 
                height={this.props.height}
                src={this.props.src} 
            />
        );
    }
}

export default Iframe;


