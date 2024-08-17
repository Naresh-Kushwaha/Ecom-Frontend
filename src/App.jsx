import { useState } from 'react'
import Navigation from './customer/components/navigation/Navigation'
import Example from './customer/components/navigation/Navigation'
import HomePage from './customer/Pages/HomePage/HomePage'
import Product from './customer/components/product/Product'
import ProductCard from './customer/components/product/ProductCard'



function App() {


  return (
  
      <div>
        {/* <div>
        <Navigation></Navigation>
        </div>
       
        <div >
          <HomePage></HomePage>
        </div> */}
        <div>
        <Product></Product>
        </div>

      </div>
    
  )
}

export default App
