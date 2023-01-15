import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Button from '@mui/material/Button';

import {updateUserAction} from '../../../../redux/actions/userActions'



const selectToken = state => state.userReducer.token

const UpdateUserButton = (props) => {
  const dispatch = useDispatch()

  const token = useSelector(selectToken)


  const saveUser = () => {
    const user = props
    dispatch(updateUserAction(token, user))
    console.log(props)
  }

  const updateUserButton = 
    <Button 
      id="EditUserComponentSaveUserButton"
      variant="contained"
      onClick={saveUser} >
        Save
    </Button>

  return updateUserButton
}

export default UpdateUserButton 