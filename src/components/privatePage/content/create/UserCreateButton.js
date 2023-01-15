import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Button from '@mui/material/Button';

import {createUserAction, getAllUsersAction} from '../../../../redux/actions/userActions'



const selectToken = state => state.userReducer.token

const CreateUserButton = (props) => {
  const dispatch = useDispatch()

  const token = useSelector(selectToken)


  const createUser = () => {
    const user = props
    dispatch(createUserAction(token, user))
    props.closeModal()
  }

  const createUserButton = 
    <Button 
      id="CreateUserComponentCreateUserButton"
      variant="contained"
      onClick={createUser} >
        Create
    </Button>

  return createUserButton
}

export default CreateUserButton 