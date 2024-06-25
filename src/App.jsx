import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import auth from './appwrite/auth'
import { login, logout } from './store/AuthSlice'
import { Footer, Header } from './components'

function App() {
  const dispatch = useDispatch()
  const [loading, setLoadng] = useState(true)

  useEffect(() => {
    auth.getCurrentUser().then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() => setLoadng(false))
  }, [])
  

  return loading ? null : (
    <div className="flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header/>
        <main>
          {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default App
