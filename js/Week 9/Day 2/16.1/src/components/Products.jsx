import data from "../store";
import { Link } from "react-router-dom";

const ShowProductLink = () => {
  return (
    data.map(product => {
      return (
        <div key={`product${product.id}`} className="product-view">
          <Link to={`products/${product.id}`}>
            <img src={product.imageUrl} alt={product.title} />
            <span>{product.title}</span>
          </Link>
        </div>
      );
    })
  );
}

const Products = () => {
  return (
    <div className="products">
      <ShowProductLink />
    </div>
  );
};

export default Products;