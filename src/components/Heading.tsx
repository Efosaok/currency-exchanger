import React from 'react';

import './heading.scss';

const Heading = () => (
  <div className='heading-wrap'>
    <div className='heading-section'>
      <div className='icon-wrap'>
        <img src="https://res.cloudinary.com/dn93xk5ni/image/upload/v1668678132/currency-exchange/exchange-rate.png" alt="exchange rate icons" />
      </div>
      <div className='template-details'>
        <div className='details-btn-wrap'>
          <button>EUR-USD Details</button>
          <button>EUR-GBP Details</button>
        </div>
      </div>
    </div>
  </div>
);

export default Heading;
