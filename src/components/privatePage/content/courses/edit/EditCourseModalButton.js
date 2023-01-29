import * as React from 'react';

import Button from '@mui/material/Button';



const EditCourseButton = (props) => {
  return (
    <Button 
      id={`DegreeCourseItemEditButton${props.course.id}`}
      variant="contained"
      onClick={props.openModal} >
        Edit
    </Button>
  )
}

export default EditCourseButton 