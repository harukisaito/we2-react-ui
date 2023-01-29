import * as React from 'react';
import { useSelector } from 'react-redux';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import DeleteCourseButton from './DeleteCourseButton';
import CancelDeleteCourseButton from './DeleteCourseCancelButton';



const DeleteCourseModal = (props) => {
  return (
    <Modal 
      id={`DeleteDialog${props.course.id}`}
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
        <DeleteCourseButton 
          course={props.course}
          closeModal={props.closeModal} >
        </DeleteCourseButton>

        <CancelDeleteCourseButton
          closeModal={props.closeModal}>
        </CancelDeleteCourseButton>

      </Box>
    </Modal>
  )
}

export default DeleteCourseModal