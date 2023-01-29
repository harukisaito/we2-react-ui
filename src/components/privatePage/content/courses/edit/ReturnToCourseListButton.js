import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Button from '@mui/material/Button';

import {getAllCoursesAction} from '../courseActions'



const selectToken = state => state.userReducer.token

const ReturnToCourseListButton = (props) => {
  const dispatch = useDispatch()

  const token = useSelector(selectToken)


  const getAllCourses = () => {
    dispatch(getAllCoursesAction(token))
    props.closeModal()
  }

  return (
    <Button 
      id="OpenDegreeCourseManagementPageListComponentButton"
      variant="contained"
      onClick={getAllCourses} >
        Return
    </Button>
  )
}

export default ReturnToCourseListButton 