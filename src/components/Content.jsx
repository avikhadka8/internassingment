import React from 'react';
import './content.css';
import data from '../Product';
const Content = () => {
  return (
    <>
   
      <div className="container">
       

        <div className="box1">
          <h1>Driver Types</h1>
          <span>SINGLE DRIVER</span>
          <br />
          <span>DUAL DRIVER</span>
        </div>
        <div className="box2">
          <h1>BLUETOOTH VERSION</h1>
          <span> &gt;5.0v</span>
          <br />
          <span> &lt;5.0v</span>
        </div>
        <div className="box3">
          <h1>Driver size</h1>
          <span>6mm</span>
          <br />
          <span>10mm</span>
        </div>
        <div className="box4">
          <h1>Battery life</h1>
          <span>&gt;4HOURS</span>
          <br />
          <span>&gt;7HOURS</span>
        </div>
        <div className="box5">
          <h1>NOISE CANCELLATION</h1>
          <span>ANC</span>
          <br />
          <span>ENC</span>
          <br />
          <span>NONE</span>
        </div>
        <div className="box6">
          <h1>Price</h1>
          <span>&gt;3000</span>
          <br />
          <span>&gt;4000</span>
          <br />
          <span>&gt;5000</span>
          <br />
          <span>&gt;6000</span>
          <br />
        </div>
        <div className="box7">
          <h1>FAST CHARGE</h1>
          <span>YES</span>
          <br />
          <span>NO</span>
        </div>
        <div className="box8">
          <h1>WATER RESISTANCE</h1>
          <span>IPX4</span>
          <br />
          <span>IPX5</span>
          <br />
          <span>NONE</span>
          <br />
        </div>
        <div className="box9">
          <h1>BRAND</h1>
          <img
            className="content_img"
            src="https://cdn-icons-png.flaticon.com/512/3800/3800024.png"
            alt=""
          />
          <br />
          <br />
          <img
            className="content_img"
            src="https://cdn-icons-png.flaticon.com/512/9724/9724824.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Content;
