import * as React from 'react';

import Button from '@mui/material/Button';



const EditUserButton = (props) => {
  const user = props.user
  const id = "UserItemEditButton" + user.userID
  
  return (
    <Button 
      id={id}
      variant="contained"
      onClick={props.openModal} >
        Edit
    </Button>
  )

}

export default EditUserButton 