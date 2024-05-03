
import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import RoomPage from './pages/RoomPage';
import ChatPage from './pages/ChatPage';

const App = () => {
  // kullanıcı girişi sağlandımı state'i
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));
  const [isRoom, setIsRoom] = useState();

  if (!isAuth) return <LoginPage setIsAuth={setIsAuth} setIsRoom={setIsRoom} />;

  return (
    <div className='container'>
      {isRoom ? <ChatPage isRoom={isRoom} /> :
        <RoomPage setIsAuth={setIsAuth} setIsRoom={setIsRoom} />}
    </div>
  )
}

export default App