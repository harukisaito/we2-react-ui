import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Button from '@mui/material/Button';

import { deleteApplicationAction } from '../applicationActions';


const selectToken = state => state.userReducer.token

const DeleteApplicationButton = (props) => {
  const dispatch = useDispatch()

  const token = useSelector(selectToken)

  const deleteApplication = () => {
    dispatch(deleteApplicationAction(token, props.application))
    props.closeModal()
  }

  return (
    <Button 
      id="DeleteDialogConfirmButton"
      variant="contained"
      onClick={deleteApplication} >
        Delete
    </Button>
  )
}

export default DeleteApplicationButton 