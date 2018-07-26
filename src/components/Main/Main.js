import React, { Component } from 'react';
import './Main.css'
import Note from '../Note/Note';


class Main extends Component {


    render() {
        return (
            <div className="Main" style={this.props.mainVisibility}>
                <Note />
            </div>
        );
    }
}

export default Main;