import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllUsersAction } from '../../../redux/actions/userActions';

import OpenCreateUserModalButton from './create/OpenCreateUserModalButton';
import CreateUserModal from './create/UserCreateModal';

import UserFile from './UserFile';

const selectRefresh = state => state.userReducer.refresh
const selectToken = state => state.userReducer.token

const UserManagementPage = (props) => {
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

  const users = props.users

  const userManagementPage = 
    <div id="UserManagementPage">
      <OpenCreateUserModalButton 
        openModal={openModal}>
      </OpenCreateUserModalButton>

      {
        users.map( (user) => (
          <UserFile 
            user={user} 
            key={user.userID}
          />
        ))
      }

      <CreateUserModal 
        closeModal={closeModal} 
        showModal={showModal}>
      </CreateUserModal>
    </div>


  return userManagementPage
}



export default UserManagementPage