import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Textfield from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import CreateCourseButton from './CreateCourseButton';
import ReturnToCourseListButton from './ReturnToCourseListButton';



const CreateCourseModal = (props) => {

  const [name, setName] = useState()
  const [shortName, setShortName] = useState()
  const [universityName, setUniversityName] = useState()
  const [universityShortName, setUniversityShortName] = useState()
  const [departmentName, setDepartmentName] = useState()
  const [departmentShortName, setDepartmentShortName] = useState()

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
      id="DegreeCourseManagementPageCreateComponent"
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
          id="CreateDegreeCourseComponentEditName"
          label="Course Name" 
          variant="outlined" 
          required
          onChange={handleChangeName}
        />

{/* course name abb. */}
        <Textfield 
          id="CreateDegreeCourseComponentEditShortName"
          label="Course Name (abb.)" 
          variant="outlined" 
          onChange={handleChangeShortName}
        />

{/* uni name */}
        <Textfield 
          id="CreateDegreeCourseComponentEditUniversityName"
          label="University Name" 
          variant="outlined" 
          required
          onChange={handleChangeUniversityName}
        />

{/* uni name abb. */}
        <Textfield 
          id="CreateDegreeCourseComponentEditUniversityShortName"
          label="University Name (abb.)" 
          variant="outlined" 
          onChange={handleChangeUniversityShortName}
        />

{/* department name */}
        <Textfield 
          id="CreateDegreeCourseComponentEditDepartmentName"
          label="Department Name" 
          variant="outlined" 
          required
          onChange={handleChangeDepartmentName}
        />

{/* department name abb. */}
        <Textfield 
          id="CreateDegreeCourseComponentEditDepartmentShortName"
          label="Department Name (abb.)" 
          variant="outlined" 
          onChange={handleChangeDepartmentShortName}
        />



{/* Create User Button */}
        <CreateCourseButton 
          closeModal={props.closeModal}
          name={name}
          shortName={shortName}
          universityName={universityName}
          universityShortName={universityShortName}
          departmentName={departmentName}
          departmentShortName={departmentShortName} >
        </CreateCourseButton>

        <ReturnToCourseListButton
          closeModal={props.closeModal}>
        </ReturnToCourseListButton>


      </Box>
    </Modal>
  )
}

export default CreateCourseModal