import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Textfield from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import CreateUserButton from './CreateApplicationButton';
import CreateApplicationButton from './CreateApplicationButton';



const selectUser = state => state.userReducer.user

const CreateApplicationModal = (props) => {
  const user = useSelector(selectUser)

  const [applicantUserID, setApplicantUserID] = useState()
  const [targetPeriodYear, setTargetPeriodYear] = useState()
  const [targetPeriodShortName, setTargetPeriodShortName] = useState("Wise")

  if(!user.isAdministrator) {
    if(applicantUserID !== user.userID) {
      setApplicantUserID(user.userID)
    }
  }

  const handleChangeUserID = (event) => {
    setApplicantUserID(event.target.value)
  }
  const handleChangeYear = (event) => {
    setTargetPeriodYear(event.target.value)
  }
  const handleChangeSemester = (event) => {
    setTargetPeriodShortName(event.target.value)
  }


  return (
    <Modal 
      id="UserManagementPageCreateComponent"
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
              Create Application
        </Typography>

{/* course */}
        <Textfield 
          id=""
          label="Course" 
          variant="outlined" 
          defaultValue={props.course.name}
          inputProps={
            { readOnly: true, }
          }
          />

{/* user id*/}
        <Textfield 
          id="CreateDegreeCourseApplicationEditUserID"
          label="User ID" 
          variant="outlined" 
          required
          value={applicantUserID}
          onChange={handleChangeUserID}
          inputProps={
            { readOnly: !user.isAdministrator, }
          }
        />

{/* year */}
        <Textfield 
          id="CreateDegreeCourseApplicationEditTargetPeriodYear"
          label="Year" 
          variant="outlined" 
          onChange={handleChangeYear}
        />

{/* semester */}
        <Select
          id="CreateDegreeCourseApplicationEditTargetPeriodName"
          value={targetPeriodShortName}
          label="Semester"
          onChange={handleChangeSemester}
        >
          <MenuItem value={"Wise"}>Wise</MenuItem>
          <MenuItem value={"Sose"}>Sose</MenuItem>
        </Select>



{/* Create application Button */}
        <CreateApplicationButton 
          closeModal={props.closeModal}
          applicantUserID={applicantUserID}
          degreeCourseID={props.course.id}
          targetPeriodYear={targetPeriodYear}
          targetPeriodShortName={targetPeriodShortName} >
        </CreateApplicationButton>



      </Box>
    </Modal>
  )
}

export default CreateApplicationModal