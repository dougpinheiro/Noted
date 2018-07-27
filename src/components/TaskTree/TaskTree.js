import React, { Component } from 'react'
import './TaskTree.css'

class TaskTree extends Component {
    render() {
        return (
            <div className="TaskTree">
                <form className="FrmTree">
                    <div className="TopInput">
                        <input id="itTask" type="text" />
                        <input id="btnAdd" type="submit" />
                    </div>
                </form>
                <div className="MainTree">

                </div>
            </div>
        );
    }
}

export default TaskTree;