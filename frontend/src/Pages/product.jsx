import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const {all_products} = useContext(ShopContext);
  const {productID} = useParams();
  const product = all_products.find((e) => e.id === Number(productID));
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product
