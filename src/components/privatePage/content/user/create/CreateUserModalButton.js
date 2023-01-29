import * as React from 'react';

import Button from '@mui/material/Button';

const OpenCreateUserModalButton = (props) => {
  return (
    <Button
      id="UserManagementPageCreateComponent"
      variant="outlined"
      onClick={props.openModal} >
      Create User
    </Button>
  )
}

export default OpenCreateUserModalButton 