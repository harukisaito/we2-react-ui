import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import PublicPage from './components/publicPage/PublicPage'
import PrivatePage from './components/privatePage/PrivatePage'

import { clearLoginModalErrorUserAction } from './redux/actions/userActions';

import './css/main.css'

const selectUser = state => state.userReducer.user

const App = () => {
  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  dispatch(clearLoginModalErrorUserAction())


  const app = 
    <div>
      {
        user? 
        <PrivatePage/> : 
        <PublicPage />
      }
    </div>

  return app
}


export default App