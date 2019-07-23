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


export const createUserProfileDocument = async (user, additionalData) => {
  // if there is no user logged in yet ..
  if (!user) return;

  // else .. go to Firestore to see if this user is already exist or he is a new one?
  const userRef = firestore.doc(`/users/${user.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) { // this user doesn't exist in our database yet
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log(`error while creating the user`, error.message);
    }

  }
  return userRef;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;