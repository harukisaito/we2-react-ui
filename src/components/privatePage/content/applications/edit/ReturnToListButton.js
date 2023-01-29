import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Button from '@mui/material/Button';

import {getAllUsersAction} from '../../user/userActions'



const selectToken = state => state.userReducer.token

const ReturnToUsersButton = (props) => {
  const dispatch = useDispatch()

  const token = useSelector(selectToken)


  const getAllUsers = () => {
    dispatch(getAllUsersAction(token))
    props.closeModal()
  }

  const returnToUsersButton = 
    <Button 
      id="OpenUserManagementPageListComponentButton"
      variant="contained"
      onClick={getAllUsers} >
        Return
    </Button>

  return returnToUsersButton
}

export default ReturnToUsersButton 