import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./screens/home/HomeScreen";
import './App.css';

//import Home from "./screens/home/HomeScreen";
import BaseLayout from './components/layout/BaseLayout.jsx';
import AuthLayout from './components/layout/AuthLayout.jsx';
import { GlobalStyles } from './styles/global/GlobalStyles.js';
// Auth pages
import SignIn from './pages/auth/SignInScreen';
import SignUp from './pages/auth/SignUpScreen';
import Reset from './pages/auth/ResetScreen';
import ChangePassword from './pages/auth/ChangePasswordScreen';
import CheckMail from './pages/auth/CheckMailScreen';
import Verification from './pages/auth/VerificationScreen';
import NotFound from './pages/error/NotFoundScreen';

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Routes>
          {/* main screens */}
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
            </Route>

            {/* auth screens */}
            <Route path="/" element={<AuthLayout />}>
            <Route path="sign_in" element={<SignIn />} />
            <Route path="sign_up" element={<SignUp />} />
            <Route path="reset" element={<Reset />} />
            <Route path="change_password" element={<ChangePassword />} />
            <Route path="check_mail" element={<CheckMail />} />
            <Route path="verification" element={<Verification />} />
          </Route>
          
  
          {/* Base layout or other routes can be added here */}
          {/* <Route path="/base" element={<BaseLayout />} /> */}

          {/* Error route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
