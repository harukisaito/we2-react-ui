import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Button from '@mui/material/Button';

import {createUserAction, getAllUsersAction} from '../userActions'



const selectToken = state => state.userReducer.token

const CreateUserButton = (props) => {
  const dispatch = useDispatch()

  const token = useSelector(selectToken)


  const createUser = () => {
    const user = props
    dispatch(createUserAction(token, user))
    props.closeModal()
  }

  return (
    <Button 
      id="CreateUserComponentCreateUserButton"
      variant="contained"
      onClick={createUser} >
        Create
    </Button>
  )
}

export default CreateUserButton 