import styled from "styled-components";
import { Input } from "../../styles/form";
import { cardsData } from "../../data/data";
import { BaseButtonGreen } from "../../styles/button";
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import React, { useState, useEffect } from "react"; // Add this line to import useState
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const paymentMethod = [];

const ShippingPaymentWrapper = styled.div`
  .shipping-addr,
  .shipping-method,
  .payment-method {
    margin: 20px 0;

    &-title {
      margin-bottom: 8px;
    }

    .list-group {
      padding: 24px;
      background-color: ${defaultTheme.color_whitesmoke};
      max-width: 818px;
      margin-top: 24px;
      border-radius: 12px;

      @media (max-width: ${breakpoints.sm}) {
        padding: 16px;
        border-radius: 8px;
        margin-top: 16px;
      }
    }

    .list-group-item {
      column-gap: 20px;
    }
    .horiz-line-separator {
      margin: 20px 0;
      @media (max-width: ${breakpoints.sm}) {
        margin: 12px 0;
      }
    }
  }

  .payment-method {
    .list-group-item {
      &-head {
        column-gap: 20px;
      }
    }

    .payment-cards {
      gap: 20px;
      margin: 24px 0 30px 34px;

      @media (max-width: ${breakpoints.lg}) {
        gap: 16px;
      }

      @media (max-width: ${breakpoints.sm}) {
        margin-top: 16px;
        margin-bottom: 16px;
        gap: 10px;
        margin-left: 0;
      }
      .payment-card {
        position: relative;
        width: 80px;
        height: 46px;
        input {
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: 80px;
          height: 46px;
          z-index: 10;
          cursor: pointer;

          &:checked {
            & + .card-wrapper {
              .card-selected {
                position: absolute;
                top: -8px;
                right: -5px;
                width: 14px;
                height: 14px;
                display: inline-block;
              }
            }
          }
        }

        .card-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 5px;
          border: 1px solid rgba(0, 0, 0, 0.1);

          .card-selected {
            display: none;
            transition: ${defaultTheme.default_transition};
          }
        }
      }
    }

    .payment-details {
      margin-left: 34px;
      display: grid;
      row-gap: 16px;

      @media (max-width: ${breakpoints.sm}) {
        margin-left: 0;
      }

      .form-elem-group {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
        @media (max-width: ${breakpoints.sm}) {
          grid-template-columns: 100%;
          gap: 0;
        }
      }

      .form-elem {
        height: 40px;
        border: 1px solid ${defaultTheme.color_platinum};
        border-radius: 6px;
        padding: 16px;

        &:focus {
          border-color: ${defaultTheme.color_sea_green};
        }

        @media (max-width: ${breakpoints.sm}) {
          margin-bottom: 10px;
          border-radius: 4px;
        }
      }
    }
  }

  .pay-now-btn {
    @media (max-width: ${breakpoints.sm}) {
      width: 100%;
    }
  }
`;

const ShippingPayment = () => {
  

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [cart, setCart] = useState('');
  console.log("Cart items local at shipping:", cart);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    setCart(cartItems);
    //delete cartItems from localStorage
    localStorage.removeItem("cartItems");
    
   
    // Retrieve user data from localStorage
    const userData = localStorage.getItem('user_data');
    const { name, phone, address } = JSON.parse(userData);
    setName(name);
    setPhone(phone);
    setAddress(address);

    // Set delivery date to 4 days from now
    const today = new Date();
    const delivery = new Date(today);
    delivery.setDate(today.getDate() + 4); // Adding 4 days
    setDeliveryDate(delivery.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  const [paymentMethod, setPaymentMethod] = useState('');


  const handlePaymentMethodChange = (event) => {
    const selectedPaymentMethod = event.target.value;
    setPaymentMethod(selectedPaymentMethod);
    paymentMethod = selectedPaymentMethod;
    console.log("Selected Payment Method:", selectedPaymentMethod);
  };

 
  

  const navigate = useNavigate();
  const location = useLocation();

  const addorder = async () => {
    
    try {
      const params = new URLSearchParams(location.search);
      const datastring = params.get("data");
      console.log("Data string:", datastring);
      const data = JSON.parse(datastring);
      console.log('Proceed to the checkout clicked');
      const buyer = JSON.parse(localStorage.getItem('user_data'));
      const buyerID = buyer._id;
      data.buyerID = buyerID;



      const timestamp = new Date();
      //data.timestamp = timestamp;
      //data.paymentMethod = paymentMethod;
      console.log("Adding:", data);
      const response = await axios.post("http://localhost:5050/user/addtoorder",data);
      console.log("Response:", response.data);
      if (response.status === 200) {
        alert("Order placed successfully!");
        navigate("/confirmScreen");
      }
    } catch (error) {
      // Handle error
      console.error("Error:", error);
      alert("Failed to place order. Please try again later.");
    }
  };


  return (
    <ShippingPaymentWrapper>
      <div className="shipping-addr">
        <h3 className="text-xxl shipping-addr-title">Shipping Address</h3>
        <p className="text-base text-outerspace">Your shipping address:</p>
        <div className="list-group">
          <div className="list-group-item">
            <p className="font-semibold text-lg">{name}</p>
            <p className="text-base">{address}</p>
            <p className="text-base">{phone}</p>
          </div>
        </div>
      </div>
      <div className="shipping-method">
        <h3 className="text-xxl shipping-method-title">Delivery Date</h3>
        <p className="text-base text-outerspace">Your order will arrive on:</p>
        <div className="list-group">
          <div className="list-group-item">
            <p className="font-semibold text-lg">{deliveryDate}</p>
          </div>
        </div>
      </div>
      <div className="payment-method">
        <h3 className="text-xxl payment-method-title">Payment Method</h3>
        <p className="text-base text-outerspace">
          All transactions are secure and encrypted.
        </p>
        <div className="list-group">
          <div className="list-group-item">
            <div className="flex items-center list-group-item-head">
            <Input
            type="radio"
            className="list-group-item-check"
            name="payment_method"
            value="credit card"
            onChange={handlePaymentMethodChange}
          />
              <p className="font-semibold text-lg">
                Credit Card
                <span className="flex text-base font-medium text-gray">
                  We accept all major credit cards.
                </span>
              </p>
            </div>
            <div className="payment-cards flex flex-wrap">
              {cardsData?.map((card) => {
                return (
                  <div
                    className="payment-card flex items-center justify-center"
                    key={card.id}
                  >
                    <Input type="radio" name="payment_cards" />
                    <div className="card-wrapper bg-white w-full h-full flex items-center justify-center">
                      <img src={card.imgSource} alt="" />
                      <div className="card-selected text-sea-green">
                        <i className="bi bi-check-circle-fill"></i>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="payment-details">
        <div className="form-elem-group">
          <Input
            type="text"
            className="form-elem"
            placeholder="Card number"
            required
            pattern="[0-9]{16}"
            title="Please enter a 16-digit card number"
          />
          <Input
            type="text"
            className="form-elem"
            placeholder="Name of card"
            required
          />
        </div>
        <div className="form-elem-group">
          <Input
            type="text"
            className="form-elem"
            placeholder="Expiration date (MM/YY)"
            required
            pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
            title="Please enter a valid expiration date in MM/YY format"
          />
          <Input
            type="text"
            className="form-elem"
            placeholder="Security Code"
            required
            pattern="[0-9]{3}"
            title="Please enter a 3-digit security code"
          />
        </div>
      </div>
          </div>

          <div className="horiz-line-separator"></div>
          <div className="list-group-item flex items-center">
          <Input
            type="radio"
            className="list-group-item-check"
            name="payment_method"
            value="Cash on delivery"
            onChange={handlePaymentMethodChange}
          />
            <p className="font-semibod text-lg">
              Cash on delivery
              <span className="flex text-base font-medium text-gray">
                Pay with cash upon delivery.
              </span>
            </p>
          </div>
          <div className="horiz-line-separator"></div>
        </div>
      </div>
      <Link to="/confirmScreen">
      <BaseButtonGreen
          type="button"
          className="pay-now-btn"
          onClick={addorder} // Call handlePayment when button is clicked
        >
    Pay Now
  </BaseButtonGreen>
</Link>
    </ShippingPaymentWrapper>
  );
};

export default ShippingPayment;
