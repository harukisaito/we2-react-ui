import * as React from 'react';

import Button from '@mui/material/Button';

const CreateCourseModalButton = (props) => {
	return (
		<Button
			id="DegreeCourseManagementPageCreateDegreeCourseButton"
			variant="outlined"
			onClick={props.openModal} >
			Create Course
		</Button>
	)
}

export default CreateCourseModalButton 