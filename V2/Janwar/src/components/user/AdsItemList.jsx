import OrderItem from "./AdsItem";
import PropTypes from "prop-types";

const OrderItemList = ({ products }) => {
  console.log('Ads:', products.length);
  if (!products || products.length === 0) {
    return <p>No Ads available.</p>;
  }
  return (
    <div>
      {products.map((product) => {
        return <OrderItem key={product._id} product={product} />;
      })}
    </div>
  );
};
OrderItemList.propTypes = {
  products: PropTypes.array,
};
export default OrderItemList;


