import React from 'react';
import CurrencyBlock from '../components/CurrencyBlock';
import ExchangeDock from '../components/ExchangeDock';
import Heading from '../components/Heading';

import './home.scss';

const CurrencyBlocks = () => (
  <div className='currency-blocks'>
    <div className='block-wrapper'>
      <CurrencyBlock to='USD' />
    </div>

    <div className='block-wrapper'>
      <CurrencyBlock to='EUR' />
    </div>

    <div className='block-wrapper'>
      <CurrencyBlock to='GBP' />
    </div>

    <div className='block-wrapper'>
      <CurrencyBlock to='JPY' />
    </div>

    <div className='block-wrapper'>
      <CurrencyBlock to='CAD' />
    </div>

    <div className='block-wrapper'>
      <CurrencyBlock to='SAR' />
    </div>

    <div className='block-wrapper'>
      <CurrencyBlock to='INR' />
    </div>

    <div className='block-wrapper'>
      <CurrencyBlock to='BND' />
    </div>

    <div className='block-wrapper'>
      <CurrencyBlock to='AED' />
    </div>
  </div>
)

const Home = () => {
  return (
    <div className='home'>
      <Heading />
      <ExchangeDock />
      <CurrencyBlocks />
    </div>
  )
}

export default Home;
