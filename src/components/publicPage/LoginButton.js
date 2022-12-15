import * as React from 'react';
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';

import {loginUserAction} from '../../redux/actions/userActions'


const LoginButton = (props) => {
  const dispatch = useDispatch()

  const loginWithData = () => {
    dispatch(loginUserAction(props.userName, props.password))
  }

  const loginButton = 
    <Button 
      id="PerformLoginButton"
      variant="contained"
      onClick={loginWithData} >
        Login
    </Button>

  return loginButton
}

export default LoginButton 