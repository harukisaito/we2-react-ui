import * as React from 'react';
import { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import EditUserButton from './edit/EditUserModalButton';
import EditUserModal from './edit/EditUserModal';
import DeleteUserButton from './delete/DeleteUserModalButton';
import DeleteUserModal from './delete/DeleteUserModal';

const createData = (property, data) => {
  return { property, data };
}

const UserFile = (props) => {
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

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

  const user = props.user
  const rows = [
    createData('User ID:', user.userID),
    createData('First Name', user.firstName),
    createData('Last Name', user.lastName),
  ];

  const id = "UserItem" + user.userID



  return (
    <Box id={id}>

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

      <EditUserButton 
        openModal={openEditModal}
        user={user} >
      </EditUserButton>

      <EditUserModal 
        closeModal={closeEditModal} 
        showModal={showEditModal} 
        user={user}>
      </EditUserModal>

      <DeleteUserButton 
        openModal={openDeleteModal} 
        user={user} >
      </DeleteUserButton>

      <DeleteUserModal
        closeModal={closeDeleteModal} 
        showModal={showDeleteModal} 
        user={user} >
      </DeleteUserModal>

    </Box>
  )
}



export default UserFile