import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Button from '@mui/material/Button';

import {getAllApplicationsAction} from './content/applications/applicationActions'
import {displayApplicationsAction} from './displayActions'

const selectToken = state => state.userReducer.token

const NavToApplicationsButton = () => {
  const dispatch = useDispatch()

  const token = useSelector(selectToken)

  const navToApplications = () => {
    dispatch(getAllApplicationsAction(token))
    dispatch(displayApplicationsAction())
  }


  
  return (
    <Button 
      id="OpenDegreeCourseApplicationManagementPageButton"
      onClick={navToApplications} >
        Applications
    </Button>
  )
}

export default NavToApplicationsButton 
