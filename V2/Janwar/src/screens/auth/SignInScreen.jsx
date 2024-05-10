import styled from "styled-components";
import { FormGridWrapper, FormTitle } from "../../styles/form_grid.js";
import { Container } from "../../styles/styles.js";
import { staticImages } from "../../utils/images.js";
import AuthOptions from "../../components/auth/AuthOptions.jsx";
import { FormElement, Input } from "../../styles/form.js";
import PasswordInput from "../../components/auth/PasswordInput.jsx";
import { Link } from "react-router-dom";
import { BaseButtonBlack } from "../../styles/button.js";
import { breakpoints, defaultTheme } from "../../styles/themes/default.js";

import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const SignInScreenWrapper = styled.section`
  .form-separator {
    margin: 32px 0;
    column-gap: 18px;

    @media (max-width: ${breakpoints.lg}) {
      margin: 24px 0;
    }

    .separator-text {
      border-radius: 50%;
      min-width: 36px;
      height: 36px;
      background-color: ${defaultTheme.color_purple};
      position: relative;
    }

    .separator-line {
      width: 100%;
      height: 1px;
      background-color: ${defaultTheme.color_platinum};
    }
  }

  .form-elem-text {
    margin-top: -16px;
    display: block;
  }
`;

const SignInScreen = () => {

  useEffect(() => {
    localStorage.clear();
  }, []);

  const [contactData, setContactData] = useState({
    email: "",
    password: ""
  });

  const handleContactChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    try {
      console.log('Sending message:', contactData);
      const userObj = await axios.post('http://localhost:5050/user/login', contactData);
      console.log('Response:', userObj);
      if (userObj.status === 200) {
        let loginFlag = true;
        localStorage.setItem('login_flag', loginFlag);
        localStorage.setItem('user_data', JSON.stringify(userObj.data));
        const encodedData = encodeURIComponent(JSON.stringify(userObj.data));
        window.location.href = `/home?data=${encodedData}`;
      }

      
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message');
    }
  };

 

  return (
    <SignInScreenWrapper>
      <FormGridWrapper>
        <Container>
          <div className="form-grid-content">
            <div className="form-grid-left">
              <img src={staticImages.form_img1} className="object-fit-cover" />
            </div>
            <div className="form-grid-right">
              <FormTitle>
                <h3>Sign In</h3>
              </FormTitle>
              <form>
                <FormElement>
                  <label htmlFor="" className="form-elem-label">
                    Email address
                  </label>
                  <Input
                    type="email"
                    placeholder=""
                    name="email"
                    className="form-elem-control"
                    onChange={handleContactChange}
                  />
                </FormElement>

                <FormElement>
                  <label htmlFor="password" className="form-elem-label">
                    Password
                  </label>
                  <Input
                    type="password"
                    placeholder=""
                    name="password"
                    className="form-elem-control"
                    onChange={handleContactChange}
                  />
                </FormElement>
                <Link
                  to="/reset"
                  className="form-elem-text text-end font-medium"
                >
                  Forgot your password?
                </Link>
                <button className="form-submit-btn" 
                  style={{
                    backgroundColor: '#2c5282',
                    color: '#fff',
                    fontWeight: 'bold',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.25rem',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    outline: 'none',
                    border: 'none',
                  }}
                  type="button"
                  onClick={login}
                >
                  Sign In
                </button>
                
              </form>
              <p className="flex flex-wrap account-rel-text">
                Don&apos;t have a account?
                <Link to="/sign_up" className="font-medium">
                  Sign Up
                </Link>
                `
              </p>
            </div>
          </div>
        </Container>
      </FormGridWrapper>
    </SignInScreenWrapper>
  );
};

export default SignInScreen;
