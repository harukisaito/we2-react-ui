import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import CreateCourseModalButton from './create/CreateCourseModalButton';
import CreateCourseModal from './create/CreateCourseModal';

import CourseFile from './CourseFile';
import { getAllCoursesAction } from './courseActions';



const selectRefresh = state => state.courseReducer.refresh
const selectToken = state => state.userReducer.token



const CourseManagementPage = (props) => {
  const dispatch = useDispatch()

  const [showModal, setShowModal] = useState(false)

  const refresh = useSelector(selectRefresh)
  const token = useSelector(selectToken)

  useEffect(() => {
    dispatch(getAllCoursesAction(token))
  }, [refresh])

  const openModal = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div id="DegreeCourseManagementPageListComponent">
      <CreateCourseModalButton 
        openModal={openModal}>
      </CreateCourseModalButton>

      <CourseList />

      <CreateCourseModal 
        closeModal={closeModal} 
        showModal={showModal}>
      </CreateCourseModal>
    </div>
  )
}



const selectCourses = state => state.courseReducer.courses

const CourseList = () => {
  const courses = useSelector(selectCourses)

  let courseList

  if(courses === null) {
    courseList = null
  }
  else {
    courseList = 
      <div>
        {
          courses.map( (course) => (
            <CourseFile 
              course={course} 
              key={course.id}
            />
          ))
        }
      </div>
  }

  return courseList
}



export default CourseManagementPage