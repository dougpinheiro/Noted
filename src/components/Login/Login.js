import React, { Component } from 'react';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import {Button} from 'primereact/button';
import {authentication} from '../../services/firebaseService'
import './Login.css';
import {doEncrypt} from '../../utils/securityUtils'

export default class Login extends Component {

    constructor(props){
        super(props);
       
        this.state = {
            email: '',
            senha: '',
            visibility : {"display":"block"}
        }

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(){
        authentication.signInWithEmailAndPassword(this.state.email, doEncrypt(this.state.senha)).then(res=>{
            this.setState({
                ...this.state,
                visibility : {"display" : "none"}
            }); 
            this.props.handleLogin();
        }).catch(err => {
            console.log(err);
        });
    }

    render() {

        return (
            <div className="Login" style={this.state.visibility}>
                <span className="ui-float-label" style={{"margin":"20px"}}>
                    <InputText id="email" type="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} style={{"width":"100%"}} />
                    <label htmlFor="email">Email</label>
                </span>
                <span className="ui-float-label" style={{"margin":"20px"}}>
                    <Password id="senha" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})} promptLabel="Insira a senha." feedback={false} style={{"width":"100%"}}/>
                    <label htmlFor="senha">Senha</label>
                </span>
                <span className="ui-float-label"  style={{"margin":"20px"}}>
                    <Button label="Entrar" onClick={this.handleLogin} style={{"width":"100%", "padding": "8px"}}/>
                </span>
            </div>
        )
    }
}
