import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import axios from "axios";
// import Commerce from '@chec/commerce.js';

// const commerce = new Commerce('pk_3660216a5b613c01ff723b38f577f043e13efa285dcc9', true);

const Products = ({ cat, filters, sort }) => {
    console.log({ cat, filters, sort });
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    // const fetchProducts = async () => {
    //     const { data } = await commerce.products.list();
    //     setProducts(data);
    // }
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                  cat
                    ? `http://localhost:5000/api/products?category=${cat}`
                    : "http://localhost:5000/api/products"
                );
                setProducts(res.data);
              } catch (err) {
                  console.log(err);
              }
        }
        getProducts();
    }, [cat]);
    // console.log(products);

    useEffect(() => {
        cat &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );
    }, [products, cat, filters]);

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "asc") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);

    return (
        <>
            <div className="my-1 text-center">
                <h2>Our Products</h2>
            </div>
            <div className='gallery1 px-2 my-5'>
                {cat
                    ? filteredProducts.map((item) => <ProductItem item={item} key={item.id} />)
                    : products
                        .slice(0, 8)
                        .map((item) => <ProductItem item={item} key={item.id} />)
                }
            </div>
        </>
    )
}

export default Products
