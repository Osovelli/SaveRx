import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SignInPage from './pages/Auth/SignIn'
import LandingPage from './pages/Landing/LandingPage'
import SignUpPage from './pages/Auth/SignUp'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
