import { useState } from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
function App() {


  return (
    <div>
{/* Adding then router from login to signup */}
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />

      </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App
