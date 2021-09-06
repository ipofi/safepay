import React from 'react';
// import './sass/AppNav.css';

const AppNav = (props) => {
  return (
    <div className='mb-3'>
      <nav className='navbar navbar-light bg-light'>
        <div className='container-fluid'>
          <a class='navbar-brand' href='#'>
            safePAY
          </a>
          <form className='d-flex'>
            <input
              className='form-control me-2 form-control-sm w-75'
              type='email'
              placeholder='Email'
              aria-label='email'
            ></input>
            <input
              className='form-control me-2 form-control-sm  w-75'
              type='password'
              placeholder='Password'
              aria-label='password'
            ></input>
            <button className='btn btn-sm btn-outline-success mx-2'>
              Login
            </button>
            <button className='btn btn-sm btn-outline-primary'>Signup</button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default AppNav;
