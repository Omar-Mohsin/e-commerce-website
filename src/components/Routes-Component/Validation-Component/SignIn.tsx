import React, { Component } from "react";
import styled from "styled-components";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
import { setUser } from "../../../feature/auth/authSlice";

interface SignInProps {
  setUser: (user: any) => void; // Adjust the type of user according to your needs
}

class SignIn extends Component<SignInProps> {
  logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      createUserDocumentFromAuth(user);
      this.props.setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container>
        <Card>
          <Title>
            <span>Welcome to Diamond Store</span>
          </Title>

          <p>Click the button to sign in</p>

          <Link to="/profile" style={{ textDecoration: "none" }}>
            <GoogleSignInButton onClick={this.logGoogleUser}>
              Sign in with Google
            </GoogleSignInButton>
          </Link>
        </Card>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Card = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;

  p {
    font-family: "Dancing Script", cursive;
    font-size: 25px;
    margin-top: -30px;
  }
`;

const Title = styled.div`
  margin-top: -89px;
  padding-bottom: 100px;
  display: flex;

  span {
    font-size: 35px;
    font-family: "Dancing Script", cursive;
  }
`;

const GoogleSignInButton = styled.button`
  display: flex;
  align-items: center;
  font-family: "Dancing Script", cursive;
  font-size: 24px;
  padding: 10px 20px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 150px;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #ffff;
    color: black;
  }
`;

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      setUser,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(SignIn);
