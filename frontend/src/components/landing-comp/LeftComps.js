import React from 'react';

const LeftComps = (props) => {
  return (
    <div>
      <div className='row border border-light border-secondary rounded p-3 mb-3 shadow'>
        <form action='#'>
          <div className='input-group mb-3'>
            <input className='form-control' type='text' />
            <span className='input-group-text' id=''>
              @
            </span>
          </div>
          <div className='input-group mb-3'>
            <select className='form-select' id=''>
              <option selected>What are you paying for?</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>
          <div className='alert alert-primary fs-6'>
            You are paying [School Fees/Payments/Plateau Health...] for [...]
          </div>
          <div className='input-group'>
            <input
              type='email'
              className='form-control'
              id=''
              aria-describedby='email'
              placeholder='Enter [subscription ID/registration/invoice/phone number]'
            />
          </div>
        </form>
      </div>
      <div className='row border border-light border-secondary rounded p-3 shadow'>
        <div className='alert alert-primary text-center'>PAYMENT DETAILS</div>
        <div>
          <p>Student Name: Ezichi O. Chinwe</p>
          <p>Details: 3rd Term 2020/2021 School Fees - Swiss Kids</p>
          <p>Amount: 3000</p>
        </div>
        <small className='text-center mb-3'>
          <span className='me-2'>Pay By:</span>
          <input
            className='form-check-input'
            type='checkbox'
            value=''
            id='flexCheckDefault1'
          />
          <label className='form-check-label me-2' for='flexCheckDefault1'>
            USSD
          </label>
          <input
            className='form-check-input'
            type='checkbox'
            value=''
            id='flexCheckDefault2'
          />
          <label className='form-check-label me-2' for='flexCheckDefault2'>
            Bank Transfer
          </label>

          <input
            className='form-check-input'
            type='checkbox'
            value=''
            id='flexCheckDefault3'
          />
          <label className='form-check-label' for='flexCheckDefault3'>
            Debit Card
          </label>
        </small>
        <div className='text-center'>
          <div className='btn btn-primary'>
            Proceed to pay{' '}
            <span className='bg-light text-dark p-1 rounded'>N3,000</span>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftComps;
