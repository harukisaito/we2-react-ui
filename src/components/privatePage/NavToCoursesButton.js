import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Button from '@mui/material/Button';

import { getAllCoursesAction } from './content/courses/courseActions';
import { displayCoursesAction } from './displayActions';

const selectToken = state => state.userReducer.token

const NavToCoursesButton = () => {
  const dispatch = useDispatch()

  const token = useSelector(selectToken)

  const navToCourses = () => {
    dispatch(getAllCoursesAction(token))
    dispatch(displayCoursesAction())
  }


  
  return (
    <Button 
      id="OpenDegreeCourseManagementPageButton"
      onClick={navToCourses} >
        Courses
    </Button>
  )
}

export default NavToCoursesButton 
