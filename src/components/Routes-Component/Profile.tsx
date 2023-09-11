import React from 'react'
import { styled } from 'styled-components';
import { useSelector  ,useDispatch} from 'react-redux'
import { SelectUser  , signOut , SelectStatus} from '../../feature/auth/authSlice'
import { Link } from 'react-router-dom';

export default function Profile() {
  const user = useSelector(SelectUser);
  const status = useSelector(SelectStatus)
  const dispatch = useDispatch();
  const OnClickHandler = ()=>{
    dispatch(signOut(null));
    console.log(status)
    console.log(user)
  }
  
  return (
    <Container>

      welcome {user}

      <Link to = '/'><Button onClick={OnClickHandler}>signout </Button></Link>
    
    
    </Container>
  )
}



const Container = styled.div`
margin-top : 50px;
`
const Button = styled.button`
  
`