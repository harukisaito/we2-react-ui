import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Button from '@mui/material/Button';

import {createUserAction, getAllUsersAction} from '../../user/userActions'
import { createApplicationAction } from '../applicationActions';


const selectToken = state => state.userReducer.token

const CreateApplicationButton = (props) => {
  const dispatch = useDispatch()

  const token = useSelector(selectToken)


  const createApplication = () => {
    dispatch(createApplicationAction(token, props))
    props.closeModal()
  } 

  const createUserButton = 
    <Button 
      id="CreateDegreeCourseApplicationCreateButton"
      variant="contained"
      onClick={createApplication} >
        Create
    </Button>

  return createUserButton
}

export default CreateApplicationButton 