import * as React from 'react';

import Button from '@mui/material/Button';

const DeleteUserModalButton = (props) => {
  const user = props.user
  const id = "UserItemDeleteButton" + user.userID

  return (
    <Button
      id={id}
      variant="outlined"
      onClick={props.openModal} >
      Delete
    </Button>
  )
}

export default DeleteUserModalButton 