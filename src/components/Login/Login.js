import React, { Component } from 'react';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import {Button} from 'primereact/button';

import './Login.css';

import {login} from '../../services/firebaseService'

export default class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            email: '',
            senha: '',
            logged: false
        }
        this.handleEntrar = this.handleEntrar.bind(this);
    }

    handleEntrar(){
        if(login(this.state.email, this.state.senha)){
            this.setState({...this.state, logged:true})
        }
    }

    render() {

        let loginVisible = 'block';

        if(this.state.logged === true){
            loginVisible = 'none';
        }else{
            loginVisible = 'block';
        }

        return (
            <div className="Login" style={{"display" : loginVisible}}>
                <span className="ui-float-label" style={{"margin":"20px"}}>
                    <InputText id="email" type="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} style={{"width":"100%"}} />
                    <label htmlFor="email">Email</label>
                </span>
                <span className="ui-float-label" style={{"margin":"20px"}}>
                    <Password id="senha" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})} promptLabel="Insira a senha." feedback={false} style={{"width":"100%"}}/>
                    <label htmlFor="senha">Senha</label>
                </span>
                <span className="ui-float-label"  style={{"margin":"20px"}}>
                    <Button label="Entrar" onClick={this.handleEntrar} style={{"width":"100%", "padding": "8px"}}/>
                </span>
            </div>
        )
    }
}
