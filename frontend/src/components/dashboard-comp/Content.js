import React from 'react';
import Overview from './Overview';
import Transactions from './Transactions';
import Payout from './Payout';

const Content = () => {
  return (
    <div className='tab-content' id='v-pills-tabContent'>
      <Overview />
      <Transactions />
      <Payout />
    </div>
  );
};

export default Content;
