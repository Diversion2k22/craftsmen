import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import Commerce from '@chec/commerce.js';

const commerce = new Commerce('pk_3660216a5b613c01ff723b38f577f043e13efa285dcc9',true);

const Products = () => {
    const [products, setProducts]=useState([])
    const fetchProducts = async () =>{
        const { data } =await commerce.products.list();
        setProducts(data);
    }
    useEffect(() => {
      fetchProducts();
    }, []);
    console.log(products);   
        
    return (
        <div className='mt-5 gallery1 px-2 mt-5'>
            {products.map((item)=>(
                <ProductItem item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Products
