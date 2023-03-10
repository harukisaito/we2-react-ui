import * as React from 'react';

import Button from '@mui/material/Button';

const OpenLoginModalButton = (props) => {
  return (
    <Button
      id="OpenLoginDialogButton"
      variant="outlined"
      onClick={props.openModal} >
      Login
    </Button>
  )
}

export default OpenLoginModalButton 