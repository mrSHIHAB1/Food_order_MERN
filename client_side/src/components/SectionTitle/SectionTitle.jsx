import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className=' text-center my-8'>
            <p className='text-yellow-600 text-4xl t'>{heading}</p>
            <h3 className='text-4xl'>---{subHeading}---</h3>
        </div>
    );
};

export default SectionTitle;