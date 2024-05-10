import styled from "styled-components";
import { BaseButtonGreen } from "../../styles/button";
import { breakpoints, defaultTheme } from "../../styles/themes/default";

const CartSummaryWrapper = styled.div`
  background-color: ${defaultTheme.color_flash_white};
  padding: 16px;

  .checkout-btn {
    min-width: 100%;
  }

  .summary-list {
    padding: 20px;

    @media (max-width: ${breakpoints.xs}) {
      padding-top: 0;
      padding-right: 0;
      padding-left: 0;
    }

    .summary-item {
      margin: 6px 0;

      &:last-child {
        margin-top: 20px;
        border-top: 1px dashed ${defaultTheme.color_sea_green};
        padding-top: 10px;
      }
    }
  }
`;

const CartSummary = ({ cartItems }) => {
  const calculateTotals = () => {
    let subTotal = 0;
    let shipping = 0;

    cartItems.forEach((item) => {
      subTotal += item.price * item.quantity;
      shipping += item.shipping;
    });

    const grandTotal = subTotal + shipping;
    return { subTotal, shipping, grandTotal };
  };

  const { subTotal, shipping, grandTotal } = calculateTotals();

  return (
    <CartSummaryWrapper>
      <ul className="summary-list">
        <li className="summary-item flex justify-between">
          <span className="font-medium text-outerspace">Sub Total</span>
          <span className="font-medium text-outerspace">${subTotal.toFixed(2)}</span>
        </li>
        <li className="summary-item flex justify-between">
          <span className="font-medium text-outerspace">Shipping</span>
          <span className="font-medium text-outerspace">${shipping.toFixed(2)}</span>
        </li>
        <li className="summary-item flex justify-between">
          <span className="font-medium text-outerspace">Grand Total</span>
          <span className="summary-item-value font-bold text-outerspace">
            ${grandTotal.toFixed(2)}
          </span>
        </li>
      </ul>
      <BaseButtonGreen type="submit" className="checkout-btn">
        Proceed To Checkout
      </BaseButtonGreen>
    </CartSummaryWrapper>
  );
};

export default CartSummary;
