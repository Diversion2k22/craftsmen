import React from 'react';
import './ProductDetails.css'

const ProductDetails = () => {

  return (
    <div className='container mt-5 py-5'>
      <div className="row">
        <div className="col-md-6 px-5 py-3">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://secure.img1-fg.wfcdn.com/im/68895127/c_crop_resize_zoom-h624-w900%5Ecompr-r85/8649/86494397/default_name.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/white-female-shoes-on-feet-royalty-free-image-912581410-1563805834.jpg?crop=1.00xw:0.752xh;0,0.127xh&resize=1200:*" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h1>Down Comforter</h1>
          <span className='text-muted'>Includes 1 down comforter</span>
          <div className='hr1 mt-4 w-100 d-flex justify-content-between align-items-center'>
            <h1>$ 349</h1>
            <div>{[...Array(5)].map(()=>(<i className="fa fa-star"></i>))}<span>1,293 Reviews</span></div>
          </div>
          <div className='hr1 mt-4'>
            <div className='w-100 d-flex justify-content-between align-items-center'>
              <span>WEIGHT</span><span>What's the difference?</span>
            </div>
            <div className='mt-3 d-flex justify-content-around'>
              <button className='bt2 px-4'>All-Season</button>
              <button className='bt1 px-4'>Lightweight</button>
            </div>
          </div>
          <div className='hr1 mt-4'>
            <div className='w-100 d-flex justify-content-between align-items-center'>
              <span>Size</span><span>Size Guide</span>
            </div>
            <div className='mt-3 d-flex justify-content-around'>
              <button className='bt2 px-4'>Full/Queen</button>
              <button className='bt1 px-4'>King/Cal King</button>
              <button className='bt1 px-4'>Twin/Twin XL</button>
            </div>
          </div>
          <div className='mt-4 w-100'>
            <div className='d-flex justify-content-around w-100'>
              <select className='px-4'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <button className='py-2 px-4 bt2'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails