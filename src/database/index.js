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
const database = firebase.database()
const auth = firebase.auth()

export const loginToDb = async () => await auth
    .signInWithPopup(googleAuthProvider)
    .then(res => res)
    .catch(err=>err)

export const logoutFromDb = async () => await auth
    .signOut()

export const checkIsMovieFavourite = async ({userId, id}) => await database
    .ref(`users/${userId}/favourites/${id}`)
    .once('value')
    .then(res=>res.val())
    .catch(err=>err)

export const addFavouriteToDb = async ({uid, favMovie}) => await database
    .ref(`users/${uid}/favourites/${favMovie.imdbID}`)
    .set(favMovie)

export const removeFavouriteFromDb = async ({uid,id}) => await database
    .ref(`users/${uid}/favourites/${id}`)
    .remove()

export const fetchFavouritesFromDb = async uid => await database
    .ref(`users/${uid}/favourites`)
    .once('value')
    .then(snapshot => {
        const movies = [];
        snapshot.forEach(childSnapshot => {
            movies.push({
                ...childSnapshot.val()
            })
        })
        return movies
    })