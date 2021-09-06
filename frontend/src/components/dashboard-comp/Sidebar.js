import React from 'react';

const Sidebar = (props) => {
  return (
    <div
      className='side_panel fs-5 py-3 nav flex-column nav-pills me-3'
      id='v-pills-tab'
      role='tablist'
      aria-orientation='vertical'
    >
      <div className='border-bottom mb-2'>Dashboard</div>
      <div
        className='border-bottom mb-2 active'
        id='v-pills-overview-tab'
        data-bs-toggle='pill'
        data-bs-target='#v-pills-overview'
        role='tab'
        aria-controls='v-pills-overview'
        aria-selected='true'
      >
        Overview
      </div>
      <div
        className='border-bottom mb-2'
        id='v-pills-transactions-tab'
        data-bs-toggle='pill'
        data-bs-target='#v-pills-transactions'
        role='tab'
        aria-controls='v-pills-transactions'
        aria-selected='false'
      >
        Transactions
      </div>
      <div
        id='v-pills-payout-tab'
        data-bs-toggle='pill'
        data-bs-target='#v-pills-payout'
        role='tab'
        aria-controls='v-pills-payout'
        aria-selected='false'
      >
        Payout
      </div>
      <div class='side_panel fs-5 py-3'>
        <div class='border-bottom mb-2'>Settings</div>
        <div
          class='border-bottom mb-2'
          id='v-pills-personal-info-tab'
          data-bs-toggle='pill'
          data-bs-target='#v-pills-personal-info'
          role='tab'
          aria-controls='v-pills-personal-info'
          aria-selected='false'
        >
          Personal Info
        </div>
        <div className='border-bottom mb-2'>Bussiness Info</div>
        <div className='border-bottom mb-2'>Payment Setup</div>
        <div>Payout</div>
      </div>
    </div>
  );
};

export default Sidebar;
