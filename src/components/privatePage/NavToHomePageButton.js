import * as React from 'react';
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';

// import {removeAllUsersAction} from './content/user/userActions'
import { displayHomeAction } from './displayActions';


const NavToHomePageButton = () => {
  const dispatch = useDispatch()

  const navToHomePage = () => {
    // dispatch(removeAllUsersAction())
    dispatch(displayHomeAction())
  }


  
  return (
    <Button 
      id="OpenStartPageButton"
      onClick={navToHomePage} >
        Home Page
    </Button>
  )
}

export default NavToHomePageButton 
