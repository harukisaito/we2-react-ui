import * as React from 'react';
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';

import {logoutUserAction} from './content/user/userActions'


const LogoutButton = () => {
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(logoutUserAction())
  }



  return (
    <Button 
      id="LogoutButton"
      variant="outlined"
      onClick={logout} >
        Logout
    </Button>
  )
}

export default LogoutButton 