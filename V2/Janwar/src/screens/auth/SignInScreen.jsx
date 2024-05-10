import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { FormGridWrapper, FormTitle } from '../../styles/form_grid';
import { Container } from '../../styles/styles';
import { staticImages } from '../../utils/images';
import { FormElement, Input } from '../../styles/form';
import { BaseButtonBlack } from '../../styles/button';
import { breakpoints, defaultTheme } from '../../styles/themes/default';

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
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const [contactData, setContactData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({ ...prevData, [name]: value }));

    // Validate password length
    if (name === 'password') {
      setPasswordError(value.length < 8);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:5050/user/login', contactData);
      if (response.status === 200) {
        localStorage.setItem('login_flag', true);
        localStorage.setItem('user_data', JSON.stringify(response.data));
        const encodedData = encodeURIComponent(JSON.stringify(response.data));
        navigate(`/home?data=${encodedData}`);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Failed to log in. Please check your credentials and try again.');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!passwordError) {
      login();
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
              <form onSubmit={handleFormSubmit}>
                <FormElement>
                  <label htmlFor="email" className="form-elem-label">
                    Email address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    className="form-elem-control"
                    onChange={handleContactChange}
                    value={contactData.email}
                    required
                  />
                </FormElement>

                <FormElement>
                  <label htmlFor="password" className="form-elem-label">
                    Password
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      className="form-elem-control"
                      onChange={handleContactChange}
                      value={contactData.password}
                      required
                    />
                    <button
                      type="button"
                      onClick={toggleShowPassword}
                      style={{
                        position: 'absolute',
                        top: 8,
                        right: 0,
                        padding: '8px',
                        border: 'block',
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                      }}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </FormElement>

                <Link to="/reset" className="form-elem-text text-end font-medium">
                  Forgot your password?
                </Link>

                <button
                  className="form-submit-btn"
                  type="submit"
                  disabled={passwordError}
                >
                  Sign In
                </button>
                
              </form>
              <p className="flex flex-wrap account-rel-text">
                Don't have an account?
                <Link to="/sign_up" className="font-medium">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </FormGridWrapper>
    </SignInScreenWrapper>
  );
};

export default SignInScreen;
