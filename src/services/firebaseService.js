import {doEncrypt} from '../utils/securityUtils'
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDqH3GOOJ5rDg4LEW5v18LDYU4JmibCPzQ",
    authDomain: "noted-39534.firebaseapp.com",
    databaseURL: "https://noted-39534.firebaseio.com",
    projectId: "noted-39534",
    storageBucket: "noted-39534.appspot.com",
    messagingSenderId: "204244509554"
};

export const firebaseApp = firebase.initializeApp(config);

export const authentication = firebase.auth();

/* export const login = (email, senha) => {
    let result = false;
    app.auth.signInWithEmailAndPassword(email, doEncrypt(senha)).then(res=>{
        console.log(res)
        result = true;
    }).catch(err=>{
        console.log(err)
    });
    console.log("Executando login de ", email, " com a senha ", doEncrypt(senha))
    return result;
}; */