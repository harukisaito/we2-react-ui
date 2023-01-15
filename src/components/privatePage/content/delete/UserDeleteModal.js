import * as React from 'react';
import { useSelector } from 'react-redux';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import DeleteUserButton from './UserDeleteButton';
import CancelDeleteUserButton from './UserDeleteCancelButton';



const selectError = state => state.userReducer.error

const DeleteUserModal = (props) => {

  const error = useSelector(selectError)

  const user = props.user

  const id = "DeleteDialogUser" + user.userID

  const deleteUserModal = 
    <Modal 
      id={id}
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
              Delete User?
        </Typography>

{/* Create User Button */}
        <DeleteUserButton 
          user={user}
          closeModal={props.closeModal} >
        </DeleteUserButton>

        <CancelDeleteUserButton
          closeModal={props.closeModal}>
        </CancelDeleteUserButton>

      </Box>
    </Modal>

  return deleteUserModal
}

export default DeleteUserModal