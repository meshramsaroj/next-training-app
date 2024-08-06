"use client"
import { addProductToCart } from '@/utils/utils'
import React from 'react'

const CartButton = ({label= "Add to cart", product}: any) => {
  return (
    <button onClick={()=>addProductToCart(product)}>{label}</button>

  )
}

export default CartButton