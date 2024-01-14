import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

function HomePage() {
const cart=useSelector((state:any) => {
  return state.cart})

  return (
    <div>
      {cart.cartItems.length} adet ürün sepette
      <br/>
      <Link to={"/posts"}> Posts</Link>
    </div>
  )
}

export default HomePage