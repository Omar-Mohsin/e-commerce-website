import React from "react";
import { styled } from "styled-components";
import { useSelector } from "react-redux";
import { SelectUser } from "../../../feature/auth/authSlice";
import NavigayionButtons from "./NavigayionButtons";
export default function Profile() {
  const user = useSelector(SelectUser);

  return (
    <Container>
      <ProfileHeader>
        <ProfileImage src="https://robohash.org/1?set=set2" />
        <ProfileInfo>
          <WelcomeMessage>
            Welcome, <UserName>{user}</UserName>
          </WelcomeMessage>
        </ProfileInfo>
      </ProfileHeader>
      <NavigayionButtons />
    </Container>
  );
}

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 50px;
  border: 4px solid #0077b6;
`;

const ProfileInfo = styled.div`
  flex-grow: 1;
`;

const WelcomeMessage = styled.h1`
  font-size: 24px;
  color: #333;
`;

const UserName = styled.span`
  color: #0077b6;
  font-weight: bold;
`;
