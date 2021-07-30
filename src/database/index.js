import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBp35f0OgHy3wnwQOar4LbSxgFexb5PZ9s",
    authDomain: "movie-app-f0746.firebaseapp.com",
    projectId: "movie-app-f0746",
    storageBucket: "movie-app-f0746.appspot.com",
    messagingSenderId: "677144518451",
    appId: "1:677144518451:web:af219e677bda106e72a846"
};

const app = () => !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig) 
    : firebase.app()

app()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// const googleAuthProvider = firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
//     .then(() => {
//         var provider = new firebase.auth.GoogleAuthProvider();
//         return firebase.auth().signInWithRedirect(provider);
//     })
//     .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//     });
const database = firebase.database()
const auth = firebase.auth()

export const loginToDb = async () => await auth
    .signInWithPopup(googleAuthProvider)
    .then(res => res)
    .catch(err=>err)