import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

// import EditUserButton from './edit/OpenEditUserModalButton';
// import EditUserModal from './edit/UserEditModal';
// import DeleteUserButton from './delete/OpenDeleteUserModalButton';
// import DeleteUserModal from './delete/UserDeleteModal';

import DeleteApplicationModalButton from './delete/DeleteApplicationModalButton';
import DeleteApplicationModal from './delete/DeleteApplicationModal';

import { getCourseByIDAction } from '../courses/courseActions';



const selectToken = state => state.userReducer.token
const selectCourse = state => state.courseReducer.course





const ApplicationFile = (props) => {
  const dispatch = useDispatch()

  // const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  // const openEditModal = () => {
  //   setShowEditModal(true)
  // }

  // const closeEditModal = () => {
  //   setShowEditModal(false)
  // }

  const openDeleteModal = () => {
    setShowDeleteModal(true)
  }

  const closeDeleteModal = () => {
    setShowDeleteModal(false)
  }



  const token = useSelector(selectToken)
  const course = useSelector(selectCourse)

  const application = props.application
  
  let applicationFile
  if (course === null) {
    dispatch(getCourseByIDAction(token, application.degreeCourseID))
    applicationFile = null
  }
  else {
    applicationFile =
      <Box id={`DegreeCourseApplicationItem${application.id}`}>
        
        <ApplicationFileTable 
          application={application}
          course={course}>
        </ApplicationFileTable>

        {/* <EditUserButton 
          openModal={openEditModal}
          user={user} >
        </EditUserButton>

        <EditUserModal 
          closeModal={closeEditModal} 
          showModal={showEditModal} 
          user={user}>
        </EditUserModal> */}

        <DeleteApplicationModalButton 
          openModal={openDeleteModal} 
          application={application} >
        </DeleteApplicationModalButton>

        <DeleteApplicationModal
          closeModal={closeDeleteModal} 
          showModal={showDeleteModal} 
          application={application} >
        </DeleteApplicationModal>

      </Box>
  }

  return applicationFile
}



const createData = (property, data, id) => {
  return { property, data, id };
}

const ApplicationFileTable = (props) => {

  const rows = [
    createData('User:', props.application.applicantUserID, "ApplicantUserID"),
    createData('Studiengang:',props.course.name, "DegreeCourseName"),
    createData('Jahr', props.application.targetPeriodYear, "TargetPeriodYear"),
    createData('Semester', props.application.targetPeriodShortName, "TargetPeriodShortName"),
    createData('Universität', props.course.universityName, "UniversityShortName"),
    createData('Fachbereich', props.course.departmentName, ""),
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {
            rows.map((row) => (
              <TableRow
                key={row.property} >
                <TableCell>
                  {row.property}
                </TableCell>
                <TableCell align="right">
                  {row.data}
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ApplicationFile