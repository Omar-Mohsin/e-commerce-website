// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider ,signInWithPopup} from 'firebase/auth'
import {getFirestore , doc  , getDoc , setDoc} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAjq4YqXxiUOyMLPjRF1lS-spcN8DP5Abs",
  authDomain: "diamond-app-b1d02.firebaseapp.com",
  projectId: "diamond-app-b1d02",
  storageBucket: "diamond-app-b1d02.appspot.com",
  messagingSenderId: "234997219663",
  appId: "1:234997219663:web:888536dda68a62fd61053a",
  measurementId: "G-NX93EFRTL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt : "select_account",

})


export const auth = getAuth();


export const db = getFirestore();

 export const createUserDocumentFromAuth =  async (userAuth) =>{
        const userDocRef = doc(db , 'users', userAuth.uid);
        console.log(userDocRef);
        const userSnapshot = await getDoc(userDocRef);
    
        if(!userSnapshot.exists()){
            const {displayName , email} = userAuth;
            const createdAt  = new Date() ;

            try{
                await setDoc(userDocRef , {displayName , email, createdAt})
                
            }catch(error){
                    console.log("error while creating a user ", error.message)
            }
        }
        return userDocRef;

 }
export const signInWithGooglePopup = ()=> signInWithPopup(auth , provider);