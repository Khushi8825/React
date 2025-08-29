import './App.css'
import {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice.js"
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import {Outlet} from 'react-router-dom'
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

useEffect(() => {
  authService.getCurrentUser()
    .then((user) => {
      // Pick only serializable fields
      if (user) {
        dispatch(login(user));
      } else {
        dispatch(logout()); // or your logout action
      }
    })
    .finally(() => setLoading(false));
}, []);



  return !loading ? (
    <div className = 'min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className = 'w-full block'>
        <Header />
        <main>
          <Outlet/>
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
