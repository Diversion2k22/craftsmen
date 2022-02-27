import React from 'react';
import './productList.css';

const ProductItem = ({item}) => {
    return (
        // <div className="galleryCard p-3 mt-2">
        //     <div className='circle'>
        //         <img src={item.img} alt="Cinque Terre" />
        //         <div className='absolute over d-flex justify-content-center align-items-center w-100 h-100'>
        //             <button className='btn colorBtn icon'><ShoppingCartOutlined /></button>
        //             <button className='icon mx-3'><SearchOutlined /></button>
        //             <button className='icon'><FavoriteBorderOutlined /></button>
        //         </div>
        //     </div>
        // </div>
        <div class="galleryCard mt-5">
            <div class="image-container">
                <div class="first">
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="discount">-25%</span>
                        <span class="wishlist"><i class="text-danger fa fa-heart"></i></span>
                    </div>
                </div>
                <img src={item.img} class="img-fluid" alt='cinque Terre' />
            </div>
            <div class="product-detail-container p-2">
                <div class="d-flex justify-content-between align-items-center">
                    <h5 class="dress-name">White traditional long dress</h5>
                    <div class="d-flex flex-column mb-2">
                        <span class="new-price">$3.99</span> <small class="old-price text-right">$5.99</small> 
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center pt-1">
                    <div class="color-select d-flex "> 
                        <input type="button" name="grey" class="btn colorBtn creme" /> 
                        <input type="button" name="red" class="btn colorBtn red ms-2" /> 
                        <input type="button" name="blue" class="btn colorBtn blue ms-2" /> 
                    </div>
                    <div class="d-flex ">
                        <span class="item-size btn colorBtn" type="button">S</span>
                        <span class="item-size ms-2 btn colorBtn" type="button">M</span>
                        <span class="item-size ms-2 btn colorBtn" type="button">L</span>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center pt-1">
                    <div> 
                        <i class="fa fa-star-o rating-star"></i>
                        <span class="rating-number">4.8</span>
                    </div>
                    <span class="buy">BUY +</span>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
