import './App.css';

import React from 'react';
import Image from './components/Image';
import Content from './components/Content';

const App = () => {
  return (
    <>
      <div className='contain'>
      <Image />
      <Content/>
      </div>

      {/* <Content/> */}
    </>
  );
};

export default App;
