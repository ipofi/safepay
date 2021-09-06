import React from 'react';
import Sidebar from './dashboard-comp/Sidebar';
import Content from './dashboard-comp/Content';

const Dashboard = (props) => {
  return (
    <div className='row'>
      <div className='col-2 border-end border-light'>
        <Sidebar />
      </div>
      <div className='col-9'>
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;
