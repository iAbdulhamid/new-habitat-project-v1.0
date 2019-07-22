import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBdc1wStqQNb8UU9Wmo7_FjouvxiCldp4g",
    authDomain: "new-habitat.firebaseapp.com",
    databaseURL: "https://new-habitat.firebaseio.com",
    projectId: "new-habitat",
    storageBucket: "",
    messagingSenderId: "44197385430",
    appId: "1:44197385430:web:da73c6b64659b593"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GithubAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;