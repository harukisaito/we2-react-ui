import * as React from 'react';

import { useSelector } from 'react-redux';

import UserManagementPage from './content/UserManagementPage';
import HomeContent from './content/HomeContent';

const selectUsers = state => state.userReducer.users

const HomeContentContainer = () => {
  const users = useSelector(selectUsers)

  const homeContentContainer = 
    <div>
      {
        users? 
        < UserManagementPage users={users} /> :
        < HomeContent />
      }
    </div>

  return homeContentContainer
}


export default HomeContentContainer