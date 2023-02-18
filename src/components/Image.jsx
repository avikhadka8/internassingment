import React from 'react';
import data from '../Product';
import './image.css';

const Image = () => {
  return (
    <>
      <div>
        {data.map((c) => {
          return (
            
              <div className="image_container">
                <div className='image_container1'>
                  <img className="product_img" src={c.image} alt="" />
                </div>
                <span className="product_name">{c.product_name}</span>
              </div>
            
          );
        })}
      </div>
    </>
  );
};

export default Image;
