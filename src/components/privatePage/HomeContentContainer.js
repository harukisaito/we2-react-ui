import * as React from 'react';

import { useSelector } from 'react-redux';

import UserManagementPage from './content/user/UserManagementPage';
import HomeContent from './content/HomeContent';
import ApplicationManagementPage from './content/applications/ApplicationManagementPage';
import CourseManagementPage from './content/courses/CourseManagementPage';

const selectDisplay = state => state.displayReducer.display

const HomeContentContainer = () => {

  const display = useSelector(selectDisplay)

  let homeContentContainer
  
  switch(display) {
    case "userManagement":
      homeContentContainer = <UserManagementPage />
      break;
    
    case "applications":
      homeContentContainer = <ApplicationManagementPage />
      break;

    case "courses":
      homeContentContainer = <CourseManagementPage />
      break;
    
    default:
      homeContentContainer = <HomeContent />
  }

  return homeContentContainer
}


export default HomeContentContainer