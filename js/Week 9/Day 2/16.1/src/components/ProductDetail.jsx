import React from "react";
import data from "../store";
import { Link } from "react-router-dom";

class ProductDetail extends React.Component {
  render() {
    const id = this.props.match.params.id;
    const {title, imageUrl, price, size} = data.find((product) => product.id == id);
    return (
      <div className="product">
        <img src={imageUrl} alt={title} />
        <h2>{title}</h2>
        <span>Price: ${price}</span>
        <span>Size: {size}</span>
        <Link to="/products">
          <button>🡰 Back</button>
        </Link>
      </div>
    );
  }
}

export default ProductDetail;