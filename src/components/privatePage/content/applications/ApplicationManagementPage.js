import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import OpenCreateUserModalButton from './create/CreateApplicationModalButton';
import CreateUserModal from './create/CreateApplicationModal';
import ApplicationFile from './AppliationFile';

import { getAllApplicationsAction } from './applicationActions';

const selectRefresh = state => state.applicationReducer.refresh
const selectToken = state => state.userReducer.token

const ApplicationManagementPage = (props) => {
  // const [showModal, setShowModal] = useState(false)

  const refresh = useSelector(selectRefresh)
  const token = useSelector(selectToken)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllApplicationsAction(token))
  }, [refresh])


  // const openModal = () => {
  //   setShowModal(true)
  // }
    
  // const closeModal = () => {
  //   setShowModal(false)
  // }

  const applicationManagementPage = 
    <div id="DegreeCourseApplicationManagementPageListComponent">
      <ApplicationList />
    </div>


  return applicationManagementPage
}



const selectApplications = state => state.applicationReducer.applications

const ApplicationList = () => {
  const applications = useSelector(selectApplications)

  let applicationList

  if(applications === null) {
    applicationList = null
  }
  else {
    applicationList = 
      <div>
        {
          applications.map( (application) => (
            <ApplicationFile 
              application={application} 
              key={application.id}
            />
          ))
        }
      </div>
  }

  return applicationList
}



export default ApplicationManagementPage