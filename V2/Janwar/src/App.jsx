import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./screens/home/HomeScreen";
import './App.css';

//import Home from "./screens/home/HomeScreen";
import BaseLayout from './components/layout/BaseLayout.jsx';
import AuthLayout from './components/layout/AuthLayout.jsx';
import { GlobalStyles } from './styles/global/GlobalStyles.js';

// Auth pages
import SignIn from './screens/auth/SignInScreen.jsx';
import SignUp from './screens/auth/SignUpScreen.jsx';
import Reset from './screens/auth/ResetScreen.jsx';
import ChangePassword from './screens/auth/ChangePasswordScreen.jsx';
import CheckMail from './screens/auth/CheckMailScreen.jsx';
import Verification from './screens/auth/VerificationScreen.jsx';
import NotFound from './screens/error/NotFoundScreen.jsx';
import BuyPet from "./screens/product/BuyPet.jsx";
import AdoptPet from "./screens/product/AdoptPet.jsx";
import Accessories from "./screens/product/Accessories.jsx";
import ProductDetailsAccessories from "./screens/product/ProductDetailsAccessories.jsx";
import ProductDetailsBuy from "./screens/product/ProductDetailsBuy.jsx";
import ProductDetailsAdopt from "./screens/product/ProductDetailsAdopt.jsx";
import Cart from "./screens/cart/CartScreen";
import Checkout from "./screens/checkout/CheckoutScreen";




function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Routes>
          {/* main screens */}
          <Route path="/" element={<BaseLayout />}>
          <Route path="/home" element={<Home />} />
            <Route path="/buy" element={<BuyPet />} />
            <Route path="/adopt" element={<AdoptPet />} />
            <Route path="/accessories" element={<Accessories />} />

            <Route path="/product/accessories/details" element={<ProductDetailsAccessories />} />
            <Route path="/product/buy/details" element={<ProductDetailsBuy />} />
            <Route path="/product/adopt/details" element={<ProductDetailsAdopt />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />

            </Route>

            {/* auth screens */}
            <Route path="/" element={<AuthLayout />}>
            <Route index element={<SignIn />} />
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
