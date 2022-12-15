import * as React from 'react';
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';

import {logoutUserAction} from '../../redux/actions/userActions'


const LogoutButton = () => {
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(logoutUserAction())
  }

  const logoutButton = 
    <Button 
      id="LogoutButton"
      variant="outlined"
      onClick={logout} >
        Logout
    </Button>

  return logoutButton
}

export default LogoutButton 