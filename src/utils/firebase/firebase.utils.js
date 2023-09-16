// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider ,signInWithPopup , signInWithRedirect} from 'firebase/auth'
import {getFirestore , doc  , getDoc , setDoc , updateDoc} from 'firebase/firestore'

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


export const getUserCart = async (userId) => {
    try {
      const userDocRef = doc(db, 'users', userId);
      const userSnapshot = await getDoc(userDocRef);
  
      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        return userData.cart || []; 
      } else {
        console.log('User document does not exist');
        return []; // Return an empty array if the user document doesn't exist
      }
    } catch (error) {
      console.error('Error fetching user cart:', error);
      return []; // Return an empty array in case of an error
    }
  };
  

export const updateCart = async (userId, products) => {
    const userDocRef = doc(db, 'users', userId);
    try {
      const userSnapshot = await getDoc(userDocRef);
      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        const currentCart = userData.cart || [];
  
        // Add new products to the cart
        const updatedCart = [
          ...currentCart,
          {
            products,
            timestamp: new Date(), 
          },
        ];;
  
        // Update the cart in the Firestore document
        await updateDoc(userDocRef, { cart: updatedCart});
  
        console.log('Cart updated successfully');
      } else {
        console.log('User document does not exist');
      }
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

// this is for doc
 export const createUserDocumentFromAuth =  async (userAuth) =>{
        const userDocRef = doc(db , 'users', userAuth.uid);
        console.log(userDocRef);
        const userSnapshot = await getDoc(userDocRef);
        if(!userSnapshot.exists()){
            const cart = [];
            const {displayName , email} = userAuth;
            const createdAt  = new Date() ;

            try{

               await setDoc(userDocRef , {displayName , email, createdAt , cart})
             
              console.log("User document created successfully");
            }catch(error){
                    console.log("error while creating a user ", error.message)
            }

            


        }
        return userDocRef;

 }
export const signInWithGooglePopup = ()=> signInWithPopup(auth , provider);
export const signInWithGoogleRedirect = ()=> signInWithRedirect(auth , provider);