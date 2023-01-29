import * as React from 'react';
import { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import EditCourseModal from './edit/EditCourseModal';
import EditCourseButton from './edit/EditCourseModalButton';
import DeleteCourseModalButton from './delete/DeleteCourseModalButton';
import DeleteCourseModal from './delete/DeleteCourseModal';
import CreateApplicationModal from '../applications/create/CreateApplicationModal';
import CreateApplicationModalButton from '../applications/create/CreateApplicationModalButton';



const CourseFile = (props) => {
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)

  const openEditModal = () => {
    setShowEditModal(true)
  }
  const closeEditModal = () => {
    setShowEditModal(false)
  }
  const openDeleteModal = () => {
    setShowDeleteModal(true)
  }
  const closeDeleteModal = () => {
    setShowDeleteModal(false)
  }
  const openCreateModal = () => {
    setShowCreateModal(true)
  }
  const closeCreatemodal = () => {
    setShowCreateModal(false)
  }

  return (
    <Box id={`DegreeCourseItem${props.course.id}`}>

      <CourseFileTable course={props.course}>
      </CourseFileTable>

      <EditCourseButton
        openModal={openEditModal}
        course={props.course} >
      </EditCourseButton>

      <EditCourseModal
        closeModal={closeEditModal}
        showModal={showEditModal}
        course={props.course}>
      </EditCourseModal>

      <DeleteCourseModalButton
        openModal={openDeleteModal} 
        course={props.course}>
      </DeleteCourseModalButton>

      <DeleteCourseModal
        closeModal={closeDeleteModal}
        showModal={showDeleteModal}
        course={props.course} >
      </DeleteCourseModal>

      <CreateApplicationModalButton
        openModal={openCreateModal}
        course={props.course} >
      </CreateApplicationModalButton>
      <CreateApplicationModal 
        closeModal={closeCreatemodal}
        showModal={showCreateModal}
        course={props.course} >
      </CreateApplicationModal>

    </Box>
  )
}

const CourseFileTable = (props) => {
  const createData = (property, data, id) => {
    return { property, data, id };
  }
  
  const rows = [
    createData('Name:', props.course.name, "Name"),
    createData('Universität', props.course.universityName, "UniversityName"),
    createData('Fachbereich', props.course.departmentName, "DepartmentName"),
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {
            rows.map((row) => (
              <TableRow
                key={row.property}
                id={row.id} >
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



export default CourseFile