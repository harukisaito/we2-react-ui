import * as React from 'react';

import Button from '@mui/material/Button';

const OpenLoginModalButton = (props) => {
    const openLoginModalButton = 
        <Button 
          id="loginButton"
          variant="outlined"
          onClick={props.openModal} >
            Login
        </Button>

    return openLoginModalButton
}

export default OpenLoginModalButton 