import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Button from '@mui/material/Button';

import {getAllUsersAction} from './content/user/userActions'
import { displayUserManagementAction } from './displayActions';

const selectToken = state => state.userReducer.token

const NavToUserManagementButton = () => {
  const dispatch = useDispatch()

  const token = useSelector(selectToken)

  const navToUserManagement = () => {
    dispatch(getAllUsersAction(token))
    dispatch(displayUserManagementAction())
  }


  
  return (
    <Button 
      id="OpenUserManagementPageButton"
      onClick={navToUserManagement} >
        User Management
    </Button>
  )
}

export default NavToUserManagementButton 
