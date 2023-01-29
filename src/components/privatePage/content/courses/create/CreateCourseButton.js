import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Button from '@mui/material/Button';

import { createCourseAction } from '../courseActions';


const selectToken = state => state.userReducer.token

const CreateCourseButton = (props) => {
  const dispatch = useDispatch()
  const token = useSelector(selectToken)

  const createCourse = () => {
    dispatch(createCourseAction(token, props))
    props.closeModal()
  }

  return (
    <Button 
      id="CreateDegreeCourseComponentCreateDegreeCourseButton"
      variant="contained"
      onClick={createCourse} >
        Create
    </Button>

  )
}

export default CreateCourseButton 