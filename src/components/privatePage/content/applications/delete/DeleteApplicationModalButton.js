import * as React from 'react';

import Button from '@mui/material/Button';

const DeleteApplicationModalButton = (props) => {
    return (
        <Button 
          id={`DegreeCourseApplicationItemDeleteButton${props.application.id}`}
          variant="outlined"
          onClick={props.openModal} >
            Delete
        </Button>
    )
}

export default DeleteApplicationModalButton 