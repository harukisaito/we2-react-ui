import * as React from 'react';
import { useSelector } from 'react-redux';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import DeleteApplicationButton from './DeleteApplicationButton';
import CancelDeleteApplicationButton from './DeleteApplicationCancelButton';



const selectError = state => state.userReducer.error

const DeleteApplicationModal = (props) => {

  return (
    <Modal 
      id={`DeleteDialogDegreeCourseApplication${props.application.id}`}
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
              Delete Course?
        </Typography>

{/* Create User Button */}
        <DeleteApplicationButton 
          application={props.application}
          closeModal={props.closeModal} >
        </DeleteApplicationButton>

        <CancelDeleteApplicationButton
          closeModal={props.closeModal}>
        </CancelDeleteApplicationButton>

      </Box>
    </Modal>
  )
}

export default DeleteApplicationModal