import React from 'react';
import { sliderItems } from '../data';

const Slider = () => {
  return (
    <section className='hero carousel-hero mt-5'>
      <div
        id='homeHerocarousel'
        className='carousel slide carousel-fade'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          {sliderItems.map((item) => (
            <button
              type='button'
              data-bs-target='#homeHerocarousel'
              data-bs-slide-to={item.id - 1}
              className={item.isActive ? 'active' : undefined}
              aria-current={item.isActive ? 'true' : undefined}
              aria-label={`Slide ${item.id}`}
            />
          ))}
        </div>
        <div className='carousel-inner h-100 mb-5'>
          {sliderItems.map((item) => (
            <div
              key={item.id}
              className={`carousel-item ${item.isActive ? 'active' : ''}`}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className='carousel-caption my-auto text-center '>
                <h1 className='hero-headline white text-center'>
                  {item.title}
                </h1>
                <h3 className='hero-subhead white text-center'>{item.desc}</h3>
                <div className='slider-btns mt-4'>
                  <button className='btn btn-1 btn-primary btn-lg'>
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#homeHerocarousel'
          data-bs-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#homeHerocarousel'
          data-bs-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </section>
  );
};

export default Slider;
