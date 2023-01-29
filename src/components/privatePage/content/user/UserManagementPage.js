import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllUsersAction } from './userActions';

import CreateUserModalButton from './create/CreateUserModalButton';
import CreateUserModal from './create/CreateUserModal';

import UserFile from './UserFile';

const selectRefresh = state => state.userReducer.refresh
const selectToken = state => state.userReducer.token
const selectUsers = state => state.userReducer.users

const UserManagementPage = () => {
  const [showModal, setShowModal] = useState(false)

  const refresh = useSelector(selectRefresh)
  const token = useSelector(selectToken)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsersAction(token))
}, [refresh])


  const openModal = () => {
    setShowModal(true)
  }
    
  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div id="UserManagementPage">
      <CreateUserModalButton 
        openModal={openModal}>
      </CreateUserModalButton>

      <UserList />
      
      <CreateUserModal 
        closeModal={closeModal} 
        showModal={showModal}>
      </CreateUserModal>
    </div>
  )
}

const UserList = () => {
  const users = useSelector(selectUsers)

  let userList

  if(users === null) {
    userList = null
  }
  else {
    userList = 
      <div>
        {
          users.map( (user) => (
            <UserFile 
              user={user} 
              key={user.userID}
            />
          ))
        }
      </div>
  }

  return userList
}



export default UserManagementPage