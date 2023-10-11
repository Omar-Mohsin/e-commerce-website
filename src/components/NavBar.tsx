import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DiamondIcon from "@mui/icons-material/Diamond";
import { SelectAllCart } from "../feature/cart/cartsSlice";
import { signOut } from "../feature/auth/authSlice";
import { SelectUser } from "../feature/auth/authSlice";

function NavBar(): JSX.Element {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(signOut(null));
  };
  const cart = useSelector(SelectAllCart);
  const user = useSelector(SelectUser);

  return (
    <>
      <Wrap>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <Logos>
            <DiamondIcon />

            <h1>Store </h1>
          </Logos>
        </Link>
        <LeftNav>
          {user ? (
            <Sign>
              <Link
                to="/profile"
                style={{ textDecoration: "none", color: "black" }}
              >
                profile
              </Link>

              <Link
                to="/orders"
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginLeft: 40,
                  marginRight: 10,
                }}
              >
                Orders
              </Link>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <p onClick={onClickHandler}>logout</p>
              </Link>
            </Sign>
          ) : (
            <Sign>
              <Link
                to="/signIn"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p>sign-in</p>
              </Link>
            </Sign>
          )}

          <p>
            <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
              <ShoppingCartIcon></ShoppingCartIcon>
            </Link>
            <span>{cart?.length}</span>
          </p>
        </LeftNav>
      </Wrap>
      <Outlet></Outlet>
    </>
  );
}

export default NavBar;

const Wrap = styled.div`
  position: fixed; /* Set to fixed to make it stay at the top */
  display: flex;
  height: 50px;
  left: 0;
  right: 0;
  top: 0;
  justify-content: space-between;
  align-items: center;
  background-color: #eeeeee;
  z-index: 1000;
  margin-bottom: 10px;

  h1 {
    font-family: "Dancing Script", cursive;

    margin-left: 20px;
  }
`;
const LeftNav = styled.div`
  display: flex;

  align-items: center;

  p {
    margin: 0px 20px;
    cursor: pointer;
  }
`;

const Logos = styled.div`
  margin-left: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    margin-left: 10px;
  }
`;
const Sign = styled.div`
  display: flex;
  font-size: 26px;
  font-family: "Dancing Script", cursive;
  margin-bottom: 9px;
`;