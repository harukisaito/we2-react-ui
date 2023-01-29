import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Textfield from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import UpdateUserButton from './EditUserButton';
import ReturnToUsersButton from './ReturnToUserListButton';



const selectError = state => state.userReducer.error

const EditUserModal = (props) => {

  const user = props.user

  const [firstName, setFirstName] = useState(user.firstName)
  const [lastName, setLastName] = useState(user.lastName)
  const [password, setPassword] = useState(user.password)
  const [isAdmin, setisAdmin] = useState(user.isAdministrator)

  const error = useSelector(selectError)
  
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
      id="UserManagementPageEditComponent"
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
              Edit User
        </Typography>

{/* user id */}
        <Textfield 
          id="EditUserComponentEditUserID"
          label="User ID" 
          variant="outlined" 
          value={user.userID}
          inputProps={
            { readOnly: true, }
          }
        />

{/* first name */}
        <Textfield 
          id="EditUserComponentEditFirstName"
          label="First Name" 
          variant="outlined" 
          defaultValue={user.firstName}
          onChange={handleChangeFirstName}
        />

{/* last name */}
        <Textfield 
          id="EditUserComponentEditLastName"
          label="Last Name" 
          variant="outlined" 
          defaultValue={user.lastName}
          onChange={handleChangeLastName}
        />

{/* password */}
        <Textfield 
          id="EditUserComponentEditPassword"
          label="Password" 
          type="password"
          variant="outlined" 
          onChange={handleChangePassword}
        />

{/* is admin */}
        <FormControlLabel 
          id="EditUserComponentEditIsAdministrator"
          control={
            <Checkbox 
              defaultChecked={user.isAdministrator===true} 
              onChange={handleChangeisAdmin}
            />
          } 
          label="is Admin" />

{/* Login Button */}
        < UpdateUserButton
          userID={user.userID}
          firstName={firstName}
          lastName={lastName}
          password={password}
          isAdmin={isAdmin}
        />

        <ReturnToUsersButton 
          closeModal={props.closeModal}>
        </ReturnToUsersButton>

      </Box>
    </Modal>
  )
}

export default EditUserModal