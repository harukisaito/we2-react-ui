import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Button from '@mui/material/Button';

import {deleteCourseAction} from '../courseActions'



const selectToken = state => state.userReducer.token

const DeleteCourseButton = (props) => {
  const dispatch = useDispatch()

  const token = useSelector(selectToken)


  const deleteCourse = () => {
    console.log(props.course)
    dispatch(deleteCourseAction(token, props.course))
    props.closeModal()
  }

  return (
    <Button 
      id="DeleteDialogConfirmButton"
      variant="contained"
      onClick={deleteCourse} >
        Delete
    </Button>
  )
}

export default DeleteCourseButton 