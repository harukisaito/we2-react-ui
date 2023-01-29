import * as React from 'react';

import Button from '@mui/material/Button';

const DeleteCourseModalButton = (props) => {
    return (
        <Button 
          id={`DegreeCourseItemDeleteButton${props.course.id}`}
          variant="outlined"
          onClick={props.openModal} >
            Delete
        </Button>
    )
}

export default DeleteCourseModalButton 