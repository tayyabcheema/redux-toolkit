import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts, STATUS } from '../store/productSlice';

const Products = () => {
  const { data: products, status } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUS.LOADING) {
    return <h2>Loading....</h2>;
  }

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="404 not found" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
