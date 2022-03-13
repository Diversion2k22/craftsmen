import React from 'react';
import Navbar from '../components/Navbar';
import './Checkout.css';

const Checkout = () => {
  return (
    <>
      <Navbar val={true} />
      <div className='container item-details-container margin-class'>
        <section className='item-details-section'>
          <div className='item-details-section-heading'>
            <div className='item-details-section-heading-top'>
              <h4 className='fw-bold'> YOUR BAG</h4>
              <span>1 ITEM</span>
            </div>
            <a href='!#'>Continue Shopping</a>
          </div>
          <figure className='item-details-main-section'>
            <img
              src='https://img.ltwebstatic.com/images2_pi/2018/11/09/15417477672284042023_thumbnail_600x799.webp'
              className='w-25'
              alt='cut-sweater'
            />
            <div className='item-details-main-section-content'>
              <h5 className='fw-bold'>CUT-OUT SWEATER</h5>
              <div className='d-flex flex-column align-self-start'>
                <p>Gender: Women's </p>
                <p>Color: light</p>
                <p>Size : M in stock</p>
              </div>
              <div className='link-box'>
                <a href='#!'>Edit</a>
                <a href='#!'>Delete</a>
                <a href='#!'>Move to Wishlist</a>
              </div>
            </div>
            <div className='dropdown-box'>
              <span>1</span>
              <i class='fas fa-chevron-circle-down'></i>
            </div>
            <p>$65.00</p>
          </figure>
          <button className='black-btn w-25'>
            <span className='px-1'>CHECKOUT</span>
            <i className='fas fa-long-arrow-alt-right icon-design'></i>
          </button>
          <div>
            <p>Free Shopping , Free Returns</p>
          </div>
        </section>

        <section className='pricing-section'>
          <div className='pricing-section-top'>
            <button className='black-btn'>
              <span className='px-1'>CHECKOUT</span>
              <i className='fas fa-long-arrow-alt-right icon-design'></i>
            </button>
            <div className='center-text'>
              <p>By placing your order you agree to the</p>
              <a href='!#'>&nbsp; Delivery Terms</a>
            </div>
            <div className='pricing-section-mid'>
              <h5 className='fw-bold'>ORDER SUMMARRY: </h5>
              <div className='pricing-section-mid-details'>
                <div className='pricing-section-mid-item'>1 PRODUCT</div>
                <div className='pricing-section-mid-item'>
                  <span>Product total</span>
                  <span>$65.00</span>
                </div>
                <div className='pricing-section-mid-item'>
                  <span>Delivery</span>
                  <span>FREE</span>
                </div>
                <div className='pricing-section-mid-item p-2'>
                  <span className='fw-bold'>Total</span>
                  <span className='fw-bold'>$65.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className='promo-code'>
            <button>
              <span>
                <strong>PROMO CODE</strong>
                <i className='fas fa-question-circle mx-1 '></i>
              </span>
              <span>
                <i className='fas fa-chevron-circle-down'></i>
              </span>
            </button>
          </div>

          <section className='help-section'>
            <h5 className='fw-bold'>NEED HELP?</h5>
            <a href='!#'>Shipping</a>
            <a href='!#'>Returns & Exchanges</a>
            <a href='!#'>Contact Us</a>
          </section>
          <div>
            <h5 className='fw-bold'>ACCEPTED PAYMENT METHODS</h5>
          </div>
        </section>
      </div>
    </>
  );
};

export default Checkout;
