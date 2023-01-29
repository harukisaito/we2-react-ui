import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import PublicPage from './components/publicPage/PublicPage'
import HomePageContainer from './components/privatePage/HomePageContainer'

import { clearLoginModalErrorUserAction } from './components/privatePage/content/user/userActions';

import './css/main.css'

const selectUser = state => state.userReducer.user

const App = () => {
  const dispatch = useDispatch()
  
  const user = useSelector(selectUser)

  dispatch(clearLoginModalErrorUserAction())



  return (
    <div>
      {
        user? 
        <HomePageContainer/> : 
        <PublicPage />
      }
    </div>
  )
}


export default App