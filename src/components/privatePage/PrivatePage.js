import * as React from 'react';

import Grid from '@mui/material/Grid';

import LogoutButton from '../privatePage/LogoutButton'

const PrivatePage = () => {
  const privatePage = 
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
        </Grid>

        <Grid item xs={10} id="main-content-bottom">
          <div>hello user</div>
        </Grid>

        </Grid>
        <LogoutButton />
    </div>

  return privatePage
}



export default PrivatePage