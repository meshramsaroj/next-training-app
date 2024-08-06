"use client"
import { getCartProducts } from '@/utils/utils'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [cartProducts, setProducts] = useState([]);

  useEffect(() => {
    const products = getCartProducts();
    setProducts(products);
  }, []);
  return (
    <div>Navbar
        <p>Cart : {cartProducts.length ? cartProducts.length : 0} </p>
        {/* {JSON.stringify(cartProducts)} */}
    </div>
  )
}

export default Navbar