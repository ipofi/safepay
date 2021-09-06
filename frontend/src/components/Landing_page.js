import React from 'react';
import LeftComps from './landing-comp/LeftComps';
import RightComps from './landing-comp/RightComps';

const Landing_page = (props) => {
  return (
    <div>
      <section className='container'>
        <div className='row gx-5'>
          <div className='col-6'>
            <LeftComps />
          </div>
          <div className='col-6'>
            <RightComps />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing_page;
