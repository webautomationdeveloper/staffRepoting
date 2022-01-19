import React from 'react';
import Sidebar from './sidebar/Sidebar';
import './container.css';

const Container = () => {
  return <div className='Appcontainer'>
          <div className='Container__Sidebar'>
           <Sidebar />
          </div>
          <div className='Container__content'>
            content
          </div>
         </div>;
};

export default Container;
