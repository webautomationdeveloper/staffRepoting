import React from 'react';
import Sidebar from './sidebar/Sidebar';
import './container.css';
import Header from './header/Header';
import Content from './content/Content';
const Container = () => {
  return <div className='Appcontainer'>
          <div className='Container__Sidebar'>
           <Sidebar />
          </div>
          <div className='Container__content'>
           <Content />
          </div>
         </div>;
};

export default Container;
