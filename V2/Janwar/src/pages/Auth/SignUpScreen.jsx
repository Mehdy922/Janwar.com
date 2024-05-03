import styled from "styled-components";
import {
  CheckboxGroup,
  FormGridWrapper,
  FormTitle,
} from "../../styles/form_grid";
import { Container } from "../../styles/styles";
import { staticImages } from "../../utils/images";
import AuthOptions from "../../components/auth/AuthOptions";
import { FormElement, Input } from "../../styles/form";
import PasswordInput from "../../components/auth/PasswordInput";
import { Link } from "react-router-dom";
import { BaseButtonBlack } from "../../styles/button";

const SignUpScreenWrapper = styled.section`
  form {
    margin-top: 40px;
    .form-elem-text {
      margin-top: -16px;
      display: block;
    }
  }

  .text-space {
    margin: 0 4px;
  }
`;

const SignUpScreen = () => {
  return (
    <SignUpScreenWrapper>
      <FormGridWrapper>
        <Container>
          <div className="form-grid-content">
            <div className="form-grid-left">
              <img
                src={staticImages.form_img2}
                className="object-fit-cover"
                alt=""
              />
            </div>
            <div className="form-grid-right">
              <FormTitle>
                <h3>Sign Up</h3>
                <p className="text-base">
                  Sign up for free to access any of our products.
                </p>
              </FormTitle>
              <form>
                <FormElement>
                  <label htmlFor="name" className="forme-elem-label">
                    Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    className="form-elem-control"
                  />
                  <span className="form-elem-error">
                    {/* Add error message if needed */}
                  </span>
                </FormElement>

                <FormElement>
                  <label htmlFor="email" className="forme-elem-label">
                    Email address
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    className="form-elem-control"
                  />
                  <span className="form-elem-error">
                    {/* Add error message if needed */}
                  </span>
                </FormElement>

                <PasswordInput fieldName="Password" name="password" />

                <span className="form-elem-text font-medium">
                  *Use 8 or more characters with a mix of letters, numbers &
                  symbols.
                </span>
                <FormElement>
                  <label htmlFor="phone" className="forme-elem-label">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    name="phone"
                    className="form-elem-control"
                  />
                  <span className="form-elem-error">
                    {/* Add error message if needed */}
                  </span>
                </FormElement>

                <FormElement>
                  <label htmlFor="address" className="forme-elem-label">
                    Address
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your address"
                    name="address"
                    className="form-elem-control"
                  />
                  <span className="form-elem-error">
                    {/* Add error message if needed */}
                  </span>
                </FormElement>

                <CheckboxGroup>
                  <li className="flex items-center">
                    <input type="checkbox" name="terms" required />
                    <span className="text-sm">
                      I agree to the
                      <Link to="/terms" className="text-underline">
                        Terms of Use
                      </Link>
                      and
                      <Link to="/privacy" className="text-underline">
                        Privacy Policy
                      </Link>
                    </span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" name="subscribe" />
                    <span className="text-sm">
                      Subscribe to our monthly newsletter
                    </span>
                  </li>
                </CheckboxGroup>

                <BaseButtonBlack type="submit" className="form-submit-btn">
                  Sign Up
                </BaseButtonBlack>
              </form>
              <p className="flex flex-wrap account-rel-text">
                Already have an account?
                <Link to="/sign_in" className="font-medium">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </FormGridWrapper>
    </SignUpScreenWrapper>
  );
};

export default SignUpScreen;