import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './ProductCard.css'

export function ProductCard({ products, searchTerm }) {
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {filteredProducts.length === 0 ? (
        <p>No se han encontrado productos</p>
      ) : (
        filteredProducts.map((product) => {
          const { id, title, price, image } = product;
          return (
            <div key={id}>
              <Link to={`/product/${id}`}>
                <div className='pd-card'>
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                  <p>Price: ${price}</p>
                </div>
              </Link>
            </div>
          );
        })
      )}
    </>
  )
}

ProductCard.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
  searchTerm: PropTypes.string,
};