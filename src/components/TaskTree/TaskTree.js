import React, { Component } from 'react'
import './TaskTree.css'

class TaskTree extends Component {
    render() {
        return (
            <div className="TaskTree">
                <form className="FrmTree">
                    <div className="TopInput">
                        <input id="itTask" type="text" />
                        <input type="submit" />
                    </div>
                </form>
                <div className="MainTree">

                </div>
            </div>
        );
    }
}

export default TaskTree;