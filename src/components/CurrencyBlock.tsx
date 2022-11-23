import React from 'react';
import useCurrencyBlock from '../hooks/useCurrencyBlock';

import './currencyBlock.scss';

export type PopularCurrencyOpts = 'USD' | 'EUR' | 'GBP' | 'JPY' | 'CAD' | 'SAR' | 'INR' | 'BND' | 'AED' | 'NGN';

interface CurrencyBlockProps {
  to: PopularCurrencyOpts;
  from?: string;
}

const CurrencyBlock: React.FC<CurrencyBlockProps> = ({ to }) => {
  const { result } = useCurrencyBlock({ defaultTargetCurrency: to });

  return (
    <div className='currency-block'>
      <div className='result'>
        <span> {to} {result || 'XX.XX'}</span>
      </div>
    </div>
  )
};

export default CurrencyBlock;
