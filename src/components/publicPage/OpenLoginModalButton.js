import * as React from 'react';

import Button from '@mui/material/Button';

const OpenLoginModalButton = (props) => {
    const openLoginModalButton = 
        <Button 
          variant="outlined"
          onClick={props.openModal} >
            Login
        </Button>

    return openLoginModalButton
}

export default OpenLoginModalButton 