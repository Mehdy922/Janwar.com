import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'

import BaseLayout from "./components/layout/BaseLayout";
import AuthLayout from "./components/layout/AuthLayout";
import { GlobalStyles } from "./styles/global/GlobalStyles";
// auth pages
import SignIn from "./screens/auth/SignInScreen";
import SignUp from "./screens/auth/SignUpScreen";
import Reset from "./screens/auth/ResetScreen";
import ChangePassword from "./screens/auth/ChangePasswordScreen";
import CheckMail from "./screens/auth/CheckMailScreen";
import Verification from "./screens/auth/VerificationScreen";
import NotFound from "./screens/error/NotFoundScreen";

function App() {
  const [count, setCount] = useState(0)

  function App() {
    return (
      <>
        <Router>
          <GlobalStyles />
          <Routes>
              {/* auth screens */}
              <Route path="/" element={<AuthLayout />}>
              <Route path="sign_in" element={<SignIn />} />
              <Route path="sign_up" element={<SignUp />} />
              <Route path="reset" element={<Reset />} />
              <Route path="change_password" element={<ChangePassword />} />
              <Route path="check_mail" element={<CheckMail />} />
              <Route path="verification" element={<Verification />} />
            </Route>
  
  
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App
