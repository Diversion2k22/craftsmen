import React from 'react';
import './productList.css';
import { Link } from "react-router-dom";

const ProductItem = ({ item }) => {
    return (
        <>
            <div className="galleryCard mt-5">
                <div className="image-container">
                    <img src={item.img} className="img-fluid" alt='cinque Terre' />
                </div>
                <div className="product-detail-container p-2">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="dress-name">{item.title}</h5>
                        <div className="d-flex flex-column mb-2">
                            <span className="new-price">{item.price}</span>
                        </div>
                    </div>
                </div>
                <div className="button-container">
                    <div className="d-flex justify-content-center">
                        <Link to={`/product/${item._id}`}>
                            <button className="detail-btn">
                                DETAILS
                            </button> 
                        </Link>
                        <button className="cart-btn">
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem
