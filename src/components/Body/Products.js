import React from 'react'
import ProductItems from './ProductItems'

const Products = () => {
  return (
      <div className='w-11/12 mx-auto mt-5'>
          <h2 className='text-xl w-fit border-b-2 border-primary mx-auto mb-4'>Products</h2>
          <ProductItems/>
    </div>
  )
}

export default Products