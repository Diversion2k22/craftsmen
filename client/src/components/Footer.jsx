// import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
// import React from 'react'
// import logo from '../assets/logo.png'

// const Footer = () => {
//     return (
//         <div className='row w-100 footer text-center'>
//             <div className="col-sm-4 pt-3 ps-4">
//                 <div className='w-100'><img style={{width:'3rem'}} src={logo} alt="" /></div>
//                 <p className='my-3'>There are many variations of passages of Lorem Ipsum available,
//                     but the majority have suffered alteration in some form, by injected humour,
//                     or randomised words which don’t look even slightly believable.
//                 </p>
//                 <div className='w-100 d-flex justify-content-around'>
//                     <button className='btn socialIcon' style={{backgroundColor:'#3B5999'}} ><Facebook /></button>
//                     <button className='btn socialIcon' style={{backgroundColor:'#E4405F'}} ><Instagram /></button>
//                     <button className='btn socialIcon' style={{backgroundColor:'#55ACEE'}} ><Twitter /></button>
//                     <button className='btn socialIcon' style={{backgroundColor:'#E60023'}} ><Pinterest /></button>
//                 </div>
//             </div>
//             <div className="col-sm-4 pt-3">
//                 <h5 className='text-capitalize'>useful links</h5>
//                 <div className='mt-5 d-flex justify-content-around justify-content-md-between'>
//                     <div>
//                         <p className='text-capitalize'>Home</p>
//                         <p className='text-capitalize'>Man fashion</p>
//                         <p className='text-capitalize'>accessories</p>
//                         <p className='text-capitalize'>order tracking</p>
//                         <p className='text-capitalize'>wishlist</p>
//                     </div>
//                     <div>
//                         <p className='text-capitalize'>cart</p>
//                         <p className='text-capitalize'>woman fashion</p>
//                         <p className='text-capitalize'>my account</p>
//                         <p className='text-capitalize'>term</p>
//                         <p className='text-capitalize'>wishlist</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-sm-4 pt-3">
//                 <h5 className='text-capitalize'>contact</h5>
//                 <div className='mt-5'>
//                     <div><Room /><span className='ms-3'>622 Dixie Path , South Tobinchester 98336</span></div>
//                     <div className='my-4'><Phone /><span className='ms-3'>+1 234 56 78</span></div>
//                     <div><MailOutline /><span className='ms-3'>contact@lama.dev</span></div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Footer

import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import logo from '../assets/logo.png';
export default function App() {
  return (
    <MDBFooter
      bgColor='dark'
      className='text-center text-lg-start text-muted text-white'
      style={{ fontFamily: 'Roboto, Helvetica, Arial, sans-serif' }}
    >
      <section
        className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'
        style={{ backgroundColor: '' }}
      >
        <div className='me-5 d-none d-lg-block text-white'>
          <span>Get connected with us on social networks :</span>
        </div>
        <div>
          <a href='#!' className='me-4 text-light'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='#!' className='me-4 text-light'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='craftsmangdsc@gmail.com' className='me-4 text-light'>
            <i className='fab fa-google'></i>
          </a>
          <a
            href='https://www.instagram.com/craftsmen_gdsc/'
            className='me-4 text-light'
          >
            <i className='fab fa-instagram'></i>
          </a>
          <a href='#!' className='me-4 text-light'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a
            href='https://github.com/Craftsmen-GDSC/'
            className='me-4 text-light'
          >
            <i className='fab fa-github'></i>
          </a>
        </div>
      </section>
      <section style={{ color: 'rgb(173, 186, 199)' }}>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <div className='w-100 d-flex justify-content-center'>
                <img style={{ width: '4rem' }} src={logo} alt='' />
              </div>
              <p className='mt-4 text-center fs-6'>
                Our vision is to keep the local talent alive, and boost the
                economy of the region by giving them an online platform to
                showcase their gems.
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Men Fashion
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Women Fashion
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Kid's Wear
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Accessories
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Cart
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 d-flex align-items-center justify-content-center'>
                Contact
              </h6>
              <div className='d-flex justify-content-center align-items-center mb-3'>
                <i className='fas fa-home me-2'></i>
                <p className='d-flex justify-content-center align-items-center mb-0'>
                  &nbsp;India, Kolkata
                </p>
              </div>
              <div className='d-flex justify-content-center align-items-center mb-3'>
                <i className='fas fa-envelope me-2'></i>
                <p className='d-flex justify-content-center align-items-center mb-0'>
                  &nbsp;craftsmangdsc@gmail.com
                </p>
              </div>
              <div className='d-flex justify-content-center'>
                <i className='fas fa-phone me-3'></i>
                <p>+ 01 234 567 88</p>
              </div>
              <div className='d-flex justify-content-center'>
                <i className='fas fa-print me-3'></i>
                <p>+ 01 234 567 89</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className='text-center p-4'
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          color: 'rgb(173, 186, 199)',
        }}
      >
        © 2022 Copyright : &nbsp;
        <a className='text-reset fw-bold' href='#!'>
          Craftsmen
        </a>
      </div>
    </MDBFooter>
  );
}
