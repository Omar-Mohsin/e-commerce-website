import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { signOut } from "../../../feature/auth/authSlice";
function NavigayionButtons() {
  const dispatch = useDispatch();

  const OnClickHandler = () => {
    dispatch(signOut(null));
  };

  return (
    <div>
      <Navigation>
        <Link to="/">
          <Button>Store</Button>
        </Link>
        <Link to="/cart">
          <Button>My Cart</Button>
        </Link>
        <Link to="/orders">
          <Button>My Orders</Button>
        </Link>
        <Link to="/">
          <LogOutButton onClick={OnClickHandler}>Logout</LogOutButton>
        </Link>
      </Navigation>
    </div>
  );
}

export default NavigayionButtons;

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  width: 200px;
  background-color: #0077b6;
  color: white;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  font-size: 16px;
  margin: 10px;
  margin-top: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fff;
    color: black;
  }
`;
const LogOutButton = styled.button`
  width: 200px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  font-size: 16px;
  margin: 10px;
  margin-top: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fff;
    color: black;
  }
`;
