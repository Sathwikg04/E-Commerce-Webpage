import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productID } = useParams();
  const product = all_products.find((e) => e.id === productID);

  const [state,setState] = useState([])
  useEffect(() =>{
    setState(product);
  },[product])

  return (<div>
    <Breadcrum product={state} />
    <ProductDisplay product={state} />
    <DescriptionBox product={state}/>
    <RelatedProducts product={state}/>
    {console.log(product)}
  </div>
  )
}

export default Product
