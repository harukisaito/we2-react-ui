import * as React from 'react';

import Button from '@mui/material/Button';

const CancelDeleteUserButton = (props) => {
  const cancelDeleteUserButton = 
    <Button 
      id="DeleteDialogCancelButton"
      variant="contained"
      onClick={props.closeModal} >
        Cancel
    </Button>

  return cancelDeleteUserButton
}

export default CancelDeleteUserButton 