import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { commonCardStyles } from "../../styles/card";
import { breakpoints, defaultTheme } from "../../styles/themes/default";

const ProductCardWrapper = styled(Link)`
  ${commonCardStyles}
  @media(max-width: ${breakpoints.sm}) {
    padding-left: 0;
    padding-right: 0;
  }

  .product-img {
    height: 393px;
    position: relative;

    @media (max-width: ${breakpoints.sm}) {
      height: 320px;
    }
  }

  .product-wishlist-icon {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 32px;
    height: 32px;
    border-radius: 100%;

    &:hover {
      background-color: ${defaultTheme.color_yellow};
      color: ${defaultTheme.color_white};
    }
  }
`;

const ProductItem = ({ product }) => {
  const base64Regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/;
  let url;
  if (!base64Regex.test(product.images)) {
    console.error('The product image string is not base64 encoded.');
    url = 'path/to/default/image.jpg'; // Replace with your default image path
  } else {
    const binary = atob(product.images);
    const array = new Uint8Array(binary.length);
    for(let i = 0; i < binary.length; i++) {
      array[i] = binary.charCodeAt(i);
    }
    const blob = new Blob([array], {type: 'image/jpeg'}); // Adjust the type if necessary
    url = URL.createObjectURL(blob);
  }


  return (

    <ProductCardWrapper key={product.id} to="/product/buy/details">

      <div className="product-img">
      <img className="object-fit-cover" src={url} />
        <button
          type="button"
          className="product-wishlist-icon flex items-center justify-center bg-white"
        >
          <i className="bi bi-heart"></i>
        </button>
      </div>
      <div className="product-info">
        <p className="font-bold">{product.title}</p>
        <div className="flex items-center justify-between text-sm font-medium">
          <span className="text-gray">{product.pet_type}</span>
          <span className="text-outerspace font-bold">Rs {product.price}</span>
        </div>
      </div>
    </ProductCardWrapper>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  product: PropTypes.object,
};
