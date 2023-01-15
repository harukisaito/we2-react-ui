import * as React from 'react';
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';

import {removeAllUsersAction} from '../../redux/actions/userActions'

const NavToHomePageButton = () => {
  const dispatch = useDispatch()

  const navToHomePage = () => {
    dispatch(removeAllUsersAction())
  }

  const navToHomePageButton = 
    <Button 
      id="OpenStartPageButton"
      onClick={navToHomePage} >
        Home Page
    </Button>

  return navToHomePageButton
}

export default NavToHomePageButton 
