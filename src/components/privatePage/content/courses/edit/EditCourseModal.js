import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Textfield from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import SaveEditCourseButton from './EditCourseButton';
import ReturnToCourseListButton from './ReturnToCourseListButton';



const selectError = state => state.userReducer.error

const EditCourseModal = (props) => {


  const [name, setName] = useState(props.course.name)
  const [shortName, setShortName] = useState(props.course.shortName)
  const [universityName, setUniversityName] = useState(props.course.universityName)
  const [universityShortName, setUniversityShortName] = useState(props.course.universityShortName)
  const [departmentName, setDepartmentName] = useState(props.course.departmentName)
  const [departmentShortName, setDepartmentShortName] = useState(props.course.departmentShortName)

  const handleChangeName = (event) => {
    setName(event.target.value)
  }
  const handleChangeShortName = (event) => {
    setShortName(event.target.value)
  }
  const handleChangeUniversityName = (event) => {
    setUniversityName(event.target.value)
  }
  const handleChangeUniversityShortName = (event) => {
    setUniversityShortName(event.target.value)
  }
  const handleChangeDepartmentName = (event) => {
    setDepartmentName(event.target.value)
  }
  const handleChangeDepartmentShortName = (event) => {
    setDepartmentShortName(event.target.value)
  }

  return (
    <Modal 
      id="DegreeCourseManagementPageEditComponent"
      open={props.showModal}
      onClose={props.closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description" 
    >
      <Box 
        id="loginModal"
      >
{/* title of modal */}
<Typography 
          id="modal-modal-title" 
          variant="h6" 
          component="h2">
              Create Course
        </Typography>

{/* course name */}
        <Textfield 
          id="EditDegreeCourseComponentEditName"
          label="Course Name" 
          variant="outlined" 
          required
          defaultValue={name}
          onChange={handleChangeName}
        />

{/* course name abb. */}
        <Textfield 
          id="EditDegreeCourseComponentEditShortName"
          label="Course Name (abb.)" 
          variant="outlined" 
          defaultValue={shortName}
          onChange={handleChangeShortName}
        />

{/* uni name */}
        <Textfield 
          id="EditDegreeCourseComponentEditUniversityName"
          label="University Name" 
          variant="outlined" 
          required
          defaultValue={universityName}
          onChange={handleChangeUniversityName}
        />

{/* uni name abb. */}
        <Textfield 
          id="EditDegreeCourseComponentEditUniversityShortName"
          label="University Name (abb.)" 
          variant="outlined" 
          defaultValue={universityShortName}
          onChange={handleChangeUniversityShortName}
        />

{/* department name */}
        <Textfield 
          id="EditDegreeCourseComponentEditDepartmentName"
          label="Department Name" 
          variant="outlined" 
          required
          defaultValue={departmentName}
          onChange={handleChangeDepartmentName}
        />

{/* department name abb. */}
        <Textfield 
          id="EditDegreeCourseComponentEditDepartmentShortName"
          label="Department Name (abb.)" 
          variant="outlined" 
          defaultValue={departmentShortName}
          onChange={handleChangeDepartmentShortName}
        />



{/* Create User Button */}
        <SaveEditCourseButton 
          // closeModal={props.closeModal}
          id={props.course.id}
          name={name}
          shortName={shortName}
          universityName={universityName}
          universityShortName={universityShortName}
          departmentName={departmentName}
          departmentShortName={departmentShortName} >
        </SaveEditCourseButton>



        <ReturnToCourseListButton 
          closeModal={props.closeModal}>
        </ReturnToCourseListButton>

      </Box>
    </Modal>
  )
}

export default EditCourseModal