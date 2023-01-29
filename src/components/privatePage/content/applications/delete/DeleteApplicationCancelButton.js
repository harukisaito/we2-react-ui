import * as React from 'react';

import Button from '@mui/material/Button';

const CancelDeleteApplicationButton = (props) => {
  return (
    <Button 
      id="DeleteDialogCancelButton"
      variant="contained"
      onClick={props.closeModal} >
        Cancel
    </Button>
  )
}

export default CancelDeleteApplicationButton 