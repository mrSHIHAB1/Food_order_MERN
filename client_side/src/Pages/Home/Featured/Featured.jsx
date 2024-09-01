import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import img1 from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white py-10'>
            <SectionTitle heading="Featured Item" subHeading={"Check it out"}></SectionTitle>
            <div className='md:flex justify-centeri items-center py-8 px-16 bg-slate-500 bg-opacity-40'>
                <div className=''>
                    <img src={img1}></img>
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where cain i get some?</p>
                    <p> lorem ipsum lorem50 lorem50lorem ipsum lorem50 lorem50lorem ipsum lorem50 lorem50lorem ipsum lorem50 lorem50lorem ipsum lorem50 lorem50lorem ipsum lorem50 lorem50lorem ipsum lorem50 lorem50lorem ipsum lorem50 lorem50lorem ipsum lorem50 lorem50lorem ipsum lorem50 lorem50</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;