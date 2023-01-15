import * as React from 'react';

import Button from '@mui/material/Button';

const DeleteUserModalButton = (props) => {
    const user = props.user
    const id = "UserItemDeleteButton" + user.userID
    
    const deleteUserModalButton = 
        <Button 
          id={id}
          variant="outlined"
          onClick={props.openModal} >
            Delete
        </Button>

    return deleteUserModalButton
}

export default DeleteUserModalButton 