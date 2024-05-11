import styled from "styled-components";
import ProductItem from "./ProductItemAcc";
import PropTypes from "prop-types";
import { breakpoints } from "../../styles/themes/default";

const ProductListWrapper = styled.div`
  column-gap: 20px;
  row-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));

  @media (max-width: ${breakpoints.sm}) {
    gap: 12px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const ProductList = ({ products }) => {
  console.log('Products:', products.length);
  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }
  return (
    <ProductListWrapper className="grid">
      {products.map((product) => {
        return <ProductItem key={product._id} product={product} />;
      })}
    </ProductListWrapper>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
};

export default ProductList;