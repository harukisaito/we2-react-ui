import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Button from '@mui/material/Button';

import {editCourseAction} from '../courseActions'



const selectToken = state => state.userReducer.token

const SaveEditCourseButton = (props) => {
  const dispatch = useDispatch()

  const token = useSelector(selectToken)


  const saveEditCourse = () => {
    dispatch(editCourseAction(token, props))
  }

  return (
    <Button 
      id="EditDegreeCourseComponentSaveDegreeCourseButton"
      variant="contained"
      onClick={saveEditCourse} >
        Save
    </Button>
  )
}

export default SaveEditCourseButton 