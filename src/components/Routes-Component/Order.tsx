import React, { useState } from 'react';
import styled from 'styled-components';
import { SelectAllCart } from '../../feature/cart/cartsSlice';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
function Order() {



    interface Product {
        id  :  number , 
        title : string, 
        price : number , 
        image  : string ,
        description : string,
      }
  const [ordered, setOrdered] = useState('');

  const onClickHandler = () => {
    setOrdered('Ordered');
  };



  const cart :Array<Product>  = useSelector(SelectAllCart);

  return (
    <Container>
        { cart.length > 0 ? (
      <Form>
        <FormTitle>Order Form</FormTitle>
        <FormGroup>
          <InputLabel htmlFor='firstName'>First Name:</InputLabel>
          <InputField  placeholder='ex: Omar' required  />
        </FormGroup>
        <FormGroup>
          <InputLabel htmlFor='lastName'>Last Name:</InputLabel>
          <InputField required />
        </FormGroup>
        <FormGroup>
          <InputLabel htmlFor='phoneNumber'>Phone Number:</InputLabel>
          <InputField required />
        </FormGroup>
        <FormGroup>
          <InputLabel htmlFor='location'>Location:</InputLabel>
          <InputField required placeholder='ex: Amman' />
        </FormGroup>
        <SubmitButton type='button' onClick={onClickHandler}>
          Click to Order
        </SubmitButton>
        <OrderStatus>{ordered}</OrderStatus>
      </Form>
)  : <h1>Cart is empty</h1>
  }
    </Container>
  );
}

export default Order;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #EEEEEE;
`;

const Form = styled.form`
  background-color: #fff;
  padding: 100px;
  padding-left : 150px;
  padding-right : 150px;

  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const FormTitle = styled.h1`
  font-size: 24px;
  color: #333;
  font-weight : bold;
  margin-bottom :50px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const InputLabel = styled.label`
  font-size: 18px;
  color: #555;
  margin-bottom: 10px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const SubmitButton = styled.button`
  background-color: #176b87;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  margin-top : 15px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #fff;
    color : #000;
  }
`;

const OrderStatus = styled.h3`
margin-top : 40px;
  color: green;
  font-weight: bold;
`;
