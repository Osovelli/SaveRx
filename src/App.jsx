import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SignInPage from './pages/Auth/SignIn'
import LandingPage from './pages/Landing/LandingPage'
import SignUpPage from './pages/Auth/SignUp'
import ForgotPasswordPage from './pages/Auth/ForgotPassword'
import VerifyCodePage from './pages/Auth/VerifyCode'
import ResetPasswordPage from './pages/Auth/ResetPassword'
import ProfilePage from './pages/Auth/Profile'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify-code" element={<VerifyCodePage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
        {/* Redirect any unknown routes to the landing page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
