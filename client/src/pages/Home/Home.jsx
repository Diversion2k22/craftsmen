import React from 'react';
// import Announcement from '../components/Announcement';
import Categories from '../../components/Categories';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Newsletter from '../../components/Newsletter/Newsletter';
import Products from '../../components/Products';
import Slider from '../../components/Slider/Slider';

const Home = () => {
  return (
    <>
      {/* <Announcement /> */}
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
