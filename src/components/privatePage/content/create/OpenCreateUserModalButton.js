import * as React from 'react';

import Button from '@mui/material/Button';

const OpenCreateUserModalButton = (props) => {
    const openCreateUserModalButton = 
        <Button 
          id="UserManagementPageCreateComponent"
          variant="outlined"
          onClick={props.openModal} >
            Create User
        </Button>

    return openCreateUserModalButton
}

export default OpenCreateUserModalButton 