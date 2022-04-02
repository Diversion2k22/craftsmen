import React from 'react';
import { Send } from '@material-ui/icons';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div
      id='newsletter'
      className='d-flex justify-content-center align-items-center mt-4 p-5 newsletter'
    >
      <div className='text-center'>
        <h1 className='newsletter-heading'>Newsletter</h1>
        <p className='newsletter-content'>
          get timely updates from your favourite products
        </p>
        <div className='input-group'>
          <input type='text' className='form-control shadow-none input-area' />
          <button
            style={{ backgroundColor: 'teal' }}
            className='btn btn-primary px-3'
          >
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
