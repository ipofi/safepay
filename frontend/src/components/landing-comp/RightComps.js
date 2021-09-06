import React from 'react';

const RightComps = (props) => {
  return (
    <div>
      <div className='row border border-light border-secondary  p-5 rounded shadow'>
        <form action='#'>
          <div className='input-group mb-5'>
            <select className='form-select' id=''>
              <option selected disabled>
                Select your bank
              </option>
              <option value='1'>FirstBank</option>
              <option value='2'>GTB</option>
              <option value='3'>Union Bank</option>
            </select>
          </div>
          <div className='alert alert-primary fs-6 mb-5'>
            You are paying [School Fees/Payments/Plateau Health...] for [...]
          </div>
          <div className='fs-4 text-center mb-5'>*737*000*123456#</div>
          <div className='text-center'>
            <div className='btn btn-primary'>I have made this payement </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RightComps;
