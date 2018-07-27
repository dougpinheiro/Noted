import {doEncrypt} from '../utils/securityUtils'
import firebase from 'firebase'
import readEnv from 'read-env'


const conf = {
    apiKey: readEnv("firebase_apiKey"),
    authDomain: readEnv("firebase_authDomain"),
    databaseURL: readEnv("firebase_databaseURL"),
    projectId: readEnv("firebase_projectId"),
    storageBucket: readEnv("firebase_storageBucket"),
    messagingSenderId: readEnv("firebase_messagingSenderId")
};

export const firebaseApp = firebase.initializeApp(conf);

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