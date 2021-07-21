import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyApnV0o_FcQ-Vmp0NR8HMALx-9P89_MNuI",
  authDomain: "chat-app-e0c0a.firebaseapp.com",
  projectId: "chat-app-e0c0a",
  storageBucket: "chat-app-e0c0a.appspot.com",
  messagingSenderId: "57864268999",
  appId: "1:57864268999:web:f93d12bb26f83cbccd62e2"
}).auth()
