import * as React from 'react';

import Button from '@mui/material/Button';

const CreateApplicationModalButton = (props) => {
  return (
    <Button
      id={`CreateDegreeCourseApplicationForDegreeCourse${props.course.id}`}
      variant="outlined"
      onClick={props.openModal} >
      Create Application
    </Button>
  )
}

export default CreateApplicationModalButton 