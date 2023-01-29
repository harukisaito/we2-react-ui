import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Button from '@mui/material/Button';

import {deleteUserAction, getAllUsersAction} from '../userActions'



const selectToken = state => state.userReducer.token

const DeleteUserButton = (props) => {
  const dispatch = useDispatch()

  const token = useSelector(selectToken)


  const deleteUser = () => {
    const user = props.user
    dispatch(deleteUserAction(token, user))
    props.closeModal()
  }

  return (
    <Button 
      id="DeleteDialogConfirmButton"
      variant="contained"
      onClick={deleteUser} >
        Delete
    </Button>
  )
}

export default DeleteUserButton 