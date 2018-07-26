import React, { Component } from 'react';
import {Tree} from 'primereact/tree'
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import './Note.css'

class Note extends Component {

    constructor(props){
        super(props);
        this.state = {
            data : this.generateData(),
            input : ""
        }
    }

    generateData() {
        return [
            {
                "label": "Documents",
                "data": "Documents Folder",
                "expandedIcon": "fa fa-fw fa-folder-open",
                "collapsedIcon": "fa fa-fw fa-folder",
                "children": [{
                    "label": "Work",
                    "data": "Work Folder",
                    "expandedIcon": "fa fa-fw fa-folder-open",
                    "collapsedIcon": "fa fa-fw fa-folder",
                    "children": [{ "label": "Expenses.doc", "icon": "fa fa-fw fa-file-word-o", "data": "Expenses Document" }, { "label": "Resume.doc", "icon": "fa fa-fw fa-file-word-o", "data": "Resume Document" }]
                },
                {
                    "label": "Home",
                    "data": "Home Folder",
                    "expandedIcon": "fa fa-fw fa-folder-open",
                    "collapsedIcon": "fa fa-fw fa-folder",
                    "children": [{ "label": "Invoices.txt", "icon": "fa fa-fw fa-file-word-o", "data": "Invoices for this month" }]
                }]
            },
            {
                "label": "Pictures",
                "data": "Pictures Folder",
                "expandedIcon": "fa fa-fw fa-folder-open",
                "collapsedIcon": "fa fa-fw fa-folder",
                "children": [
                    { "label": "barcelona.jpg", "icon": "fa fa-fw fa-file-image-o", "data": "Barcelona Photo" },
                    { "label": "logo.jpg", "icon": "fa fa-fw fa-file-image-o", "data": "PrimeFaces Logo" },
                    { "label": "primeui.png", "icon": "fa fa-fw fa-file-image-o", "data": "PrimeUI Logo" }]
            },
            {
                "label": "Movies",
                "data": "Movies Folder",
                "expandedIcon": "fa fa-fw fa-folder-open",
                "collapsedIcon": "fa fa-fw fa-folder",
                "children": [{
                    "label": "Al Pacino",
                    "data": "Pacino Movies",
                    "children": [{ "label": "Scarface", "icon": "fa fa-fw fa-file-video-o", "data": "Scarface Movie" }, { "label": "Serpico", "icon": "fa fa-fw fa-file-video-o", "data": "Serpico Movie" }]
                },
                {
                    "label": "Robert De Niro",
                    "data": "De Niro Movies",
                    "children": [{ "label": "Goodfellas", "icon": "fa fa-fw fa-file-video-o", "data": "Goodfellas Movie" }, { "label": "Untouchables", "icon": "fa fa-fw fa-file-video-o", "data": "Untouchables Movie" }]
                }]
            }
        ];
    }

    render() {
        const inputStyle = {
            "width" : "100%",
            "margin" : "8px 0px 8px 0px"
        }
        return (
            <div className="Note">
                <InputText value={this.state.input} 
                    onChange={(e) => this.setState({value: e.target.value})} 
                    style={inputStyle}    
                />
                <Button icon="pi pi-plus" onClick={this.increment}/>
                <div className="Bar">
                    <Tree value={this.state.data} 
                        selectionMode="checkbox" 
                        selection={this.state.selectedFile} 
                        selectionChange={(e) => this.setState({selectedFile: e.selection})}>
                    </Tree>  
                </div>
            </div>
        );
    }
}

export default Note;









