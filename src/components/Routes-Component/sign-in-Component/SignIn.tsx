import React from 'react'
import styled from 'styled-components';
import { signInWithGooglePopup  , createUserDocumentFromAuth} from '../../../utils/firebase/firebase.utils';
function SignIn() {

const logGoogleUser= async()=>{
const {user} = await signInWithGooglePopup();
createUserDocumentFromAuth(user);
}

  return (
    <>
    <Com>

    <button onClick={logGoogleUser}>Sign in with google pop up</button>
    </Com>
    </>
    
    )
}

export default SignIn



const Com = styled.div`
  
margin-top : 50px;


`