import React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../../utils/firebase/firebase.utils';

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <CenteredContainer>
      <Card>
        <Title>

        <span>Welcome to Diamond Store</span>
        </Title>
         
          <p>Click the button to sign in</p>
       
        <CardActions>
          <GoogleSignInButton onClick={logGoogleUser}>Sign in with Google</GoogleSignInButton>
        </CardActions>
      </Card>
    </CenteredContainer>
  );
}

export default SignIn;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Card = styled.div`
  width: 500px;
  height : 500px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;

 

  p{
    font-family: 'Dancing Script', cursive;
    font-size : 25px;
    margin-top : -30px;

  }
`;

const Title  = styled.div`
    margin-top : -89px;

 padding-bottom : 100px;
  display : flex;

  span{

    font-size : 35px;
    font-family: 'Dancing Script', cursive;
 
  }
    
`

const CardActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GoogleSignInButton = styled.button`
  display: flex;
  align-items: center;
  font-family: 'Dancing Script', cursive;
  font-size : 24px;
  padding: 10px 20px;
  background-color: #4285f4; /* Google Blue Color */
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top:  150px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffff;
    color : black ;
  }
`;
