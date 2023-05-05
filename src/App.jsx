import React from 'react';
import Nav from './Components/Nav/Nav';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='mx-10'>
      <div className='bg-slate-50 '>
      <Nav></Nav>
      </div>
      <div className='md:min-h-[calc(100vh-48px)]'>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default App;