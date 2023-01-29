import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Button from '@mui/material/Button';

import {updateUserAction} from '../userActions'



const selectToken = state => state.userReducer.token

const UpdateUserButton = (props) => {
  const dispatch = useDispatch()

  const token = useSelector(selectToken)


  const saveUser = () => {
    const user = props
    dispatch(updateUserAction(token, user))
    console.log(props)
  }

  return (
    <Button 
      id="EditUserComponentSaveUserButton"
      variant="contained"
      onClick={saveUser} >
        Save
    </Button>
  )
}

export default UpdateUserButton 