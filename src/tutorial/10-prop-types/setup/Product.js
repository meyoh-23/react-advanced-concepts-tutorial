import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './../../../assets/default-image.jpeg';

const Product = ({image, name, price}) => {
  //short-circuit alternative
  const url = image && image.url;
  return (
    <article className='product'>
      <h4>single product</h4>
      <img src={url || defaultImage} alt={name}/>
      <h4>{name || 'default name'}</h4>
      <p>${price || 3.99}</p>
    </article>
  );
};

// setting up proptype property on the component
Product.prototype = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

// setting up the default props
// default image is not shown because it has been declared as an object and si required in the Product.pototype array shown above
/* Product.defaultProps = {
  name: 'default name',
  price: 3.99, 
  image: defaultImage 
} */

export default Product;
