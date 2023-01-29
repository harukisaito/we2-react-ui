import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Textfield from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import CreateUserButton from './CreateUserButton';



const selectError = state => state.userReducer.error

const CreateUserModal = (props) => {

  const [userID, setUserID] = useState()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [password, setPassword] = useState()
  const [isAdmin, setisAdmin] = useState()

  const error = useSelector(selectError)

  const handleChangeUserID = (event) => {
    const userID = event.target.value
    setUserID(userID)
  }
  
  const handleChangeFirstName = (event) => {
    const firstName = event.target.value
    setFirstName(firstName)
  }

  const handleChangeLastName = (event) => {
    const lastName = event.target.value
    setLastName(lastName)
  }
  
  const handleChangePassword = (event) => {
    const password = event.target.value
    setPassword(password)
  }

  const handleChangeisAdmin = (event) => {
    const isAdmin = event.target.checked
    setisAdmin(isAdmin)
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
              Create User
        </Typography>

{/* user id */}
        <Textfield 
          id="CreateUserComponentEditUserID"
          label="User ID" 
          variant="outlined" 
          required
          onChange={handleChangeUserID}
        />

{/* first name */}
        <Textfield 
          id="CreateUserComponentEditFirstName"
          label="First Name" 
          variant="outlined" 
          onChange={handleChangeFirstName}
        />

{/* last name */}
        <Textfield 
          id="CreateUserComponentEditLastName"
          label="Last Name" 
          variant="outlined" 
          onChange={handleChangeLastName}
        />

{/* password */}
        <Textfield 
          id="CreateUserComponentEditPassword"
          label="Password" 
          type="password"
          variant="outlined" 
          required
          onChange={handleChangePassword}
        />

{/* is admin */}
        <FormControlLabel 
          id="CreateUserComponentEditIsAdministrator"
          control={
            <Checkbox 
              onChange={handleChangeisAdmin}
            />
          } 
          label="is Admin" />

{/* Create User Button */}
        <CreateUserButton 
          closeModal={props.closeModal}
          userID={userID}
          firstName={firstName}
          lastName={lastName}
          password={password}
          isAdmin={isAdmin} >
        </CreateUserButton>

      </Box>
    </Modal>
  )
}

export default CreateUserModal