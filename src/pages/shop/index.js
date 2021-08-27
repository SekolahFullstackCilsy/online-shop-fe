import React, {useEffect} from 'react';
import Layout from '../../layouts/Layout';
import { getProducts } from '../../store/actions/products';
import { useDispatch, useSelector } from 'react-redux';

const Shop = () => {
  const product = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, []);
  console.log(product)
  return (
    <Layout>
      <h1>Shop</h1>
      {product.loading && <h3>Loading ...</h3>}
      {!product.loading && product.products.map((val, key) => {
        return (
          <div key={key}>
            <h1>{val.name}</h1>
            <img src={val.image} alt=""/>
          </div>
        )
      })}
    </Layout>
  )
}

export default Shop