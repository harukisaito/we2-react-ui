import * as React from 'react';
import { useSelector } from 'react-redux';

import Grid from '@mui/material/Grid';

import LogoutButton from './LogoutButton'
import NavToUserManagementButton from './NavToUserManagementButton';
import HomeContentContainer from './HomeContentContainer';
import NavToHomePageButton from './NavToHomePageButton';



const selectisAdmin = state => state.userReducer.user.isAdministrator

const HomePageContainer = () => {

  const isAdmin = useSelector(selectisAdmin)

  const homePageContainer = 
    <div 
      id="StartPage">
        <Grid container >

        <Grid item xs={2} id="sidebar-top">
          <LogoutButton />
        </Grid>

        <Grid item xs={10} id="main-content-top">
          <div>REACT PROJECT</div>
        </Grid>

        <Grid item xs={2} id="sidebar-bottom">
          <NavToHomePageButton />
          {
            isAdmin ?
            <NavToUserManagementButton /> : 
            null
          }
        </Grid>

        <Grid item xs={10} id="main-content-bottom">
          <HomeContentContainer />
        </Grid>

        </Grid>
    </div>

  return homePageContainer
}



export default HomePageContainer