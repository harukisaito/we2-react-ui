import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Button from '@mui/material/Button';

import {getAllUsersAction} from '../../redux/actions/userActions'

const selectToken = state => state.userReducer.token

const NavToUserManagementButton = () => {
  const dispatch = useDispatch()

  const token = useSelector(selectToken)

  const navToUserManagement = () => {
    dispatch(getAllUsersAction(token))
  }

  const navToUserManagementButton = 
    <Button 
      id="OpenUserManagementPageButton"
      onClick={navToUserManagement} >
        User Management
    </Button>

  return navToUserManagementButton
}

export default NavToUserManagementButton 
