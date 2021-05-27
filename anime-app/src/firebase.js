import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAN63YK28eoSJWSy-cJPAfWZ-Bibb-Rbqg",
    authDomain: "servelessanimeapp5.firebaseapp.com",
    projectId: "servelessanimeapp5",
    storageBucket: "servelessanimeapp5.appspot.com",
    messagingSenderId: "846004723009",
    appId: "1:846004723009:web:f189edc6a42bff65fa55c0",
    measurementId: "G-YJQVMK0CSG"
})

export const auth = app.auth()
export default app