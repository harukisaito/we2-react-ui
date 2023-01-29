import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Grid from '@mui/material/Grid';

import OpenLoginModalButton from './OpenLoginModalButton';
import LoginModal from './LoginModal';
import { clearLoginModalErrorUserAction } from '../privatePage/content/user/userActions';



const PublicPage = () => {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()

  const openModal = () => {
    setShowModal(true)
  }
    
  const closeModal = () => {
    setShowModal(false)
    dispatch(clearLoginModalErrorUserAction())
  }

  return(
    <div 
      id="LandingPage">
        <Grid container >

          <LoginModal 
            closeModal={closeModal} 
            showModal={showModal} >
          </LoginModal>

          <Grid item xs={2} id="sidebar-top">
            <OpenLoginModalButton
              openModal={openModal} >
            </OpenLoginModalButton>
          </Grid>

          <Grid item xs={10} id="main-content-top">
            <div>REACT PROJECT</div>
          </Grid>

          <Grid item xs={2} id="sidebar-bottom">
          </Grid>

          <Grid item xs={10} id="main-content-bottom">
            <div>hello world</div>
          </Grid>

        </Grid>
    </div>
  )
}



export default PublicPage