import { useState } from 'react'
import './App.css'

// Import do Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Components
import Navbar from './components/Navbar'

//Pages
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Perfil from './pages/Perfil/Perfil'
import Register from './pages/Register/Register';

//Context
import { AuthProvider } from './context/auth';

//Hooks
import useAuth from './hooks/useAuth';

function App() {

  const [user, setUser] = useState(undefined)

  const {signed} = useAuth();

  console.log("signed", signed)

  return (

    <div className='container'>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
            <Route path='/register' element={user ? <Navigate to='/' /> : <Register />} />
            {/* <Route path='/register' element={user ? <Navigate to='/' /> : <Register />} /> */}
            <Route path="/" element={user ? <Home /> : <Navigate to='/login' />} />
            <Route path="/perfil" element={user ? <Perfil /> : <Navigate to='/login' />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
