import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Textfield from '@mui/material/TextField';

import LoginButton from './LoginButton'



const selectError = state => state.userReducer.error

const LoginModal = (props) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const error = useSelector(selectError)
  
  const handleChangeUserName = (event) => {
    setUserName(event.target.value)
  }
  
  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const loginModal = 
    <Modal 
      id="LoginDialog"
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
              Welcome!
        </Typography>

{/* username */}
        <Textfield 
          id="LoginDialogUserIDText"
          onChange={handleChangeUserName}
          required
          label="Name" 
          variant="outlined" 
          error={error!==null}
        />

{/* password */}
        <Textfield 
          id="LoginDialogPasswordText"
          onChange={handleChangePassword}
          required
          label="Password" 
          type="password"
          variant="outlined" 
          error={error!==null}
        />

{/* error message */}
        <Typography 
          id="error" 
        >
          {error}
        </Typography>

{/* Login Button */}
        <LoginButton 
          userName={userName}
          password={password}
        />

      </Box>
    </Modal>

  return loginModal
}

export default LoginModal