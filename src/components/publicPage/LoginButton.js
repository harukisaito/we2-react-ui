import * as React from 'react';
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';

import {loginUserAction} from '../privatePage/content/user/userActions'


const LoginButton = (props) => {
  const dispatch = useDispatch()

  const loginWithData = () => {
    dispatch(loginUserAction(props.userName, props.password))
  }

  return (
    <Button 
      id="PerformLoginButton"
      variant="contained"
      onClick={loginWithData} >
        Login
    </Button>
  )
}

export default LoginButton 