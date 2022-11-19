import React from 'react';
import { MOCK_CURRENCIES } from '../constants/mocks';
import useCurrencyDropdown, { CurrencyTargets } from '../hooks/useCurrencyDropdown';

import './currencyDropdown.scss';

interface CurrencyDropdownProps {
  label: CurrencyTargets;
  defaultCurrency: string;
}

const CurrencyDropdown: React.FC<CurrencyDropdownProps> = ({ label, defaultCurrency }) => {
  const { currency, chooseCurrency, showCurrency, toggleShowCurrency, currencies } = useCurrencyDropdown({ defaultCurrency });

  return (
    <div className='currency-dropdown'>
      <label>{label}</label>
      <div className='currency' onClick={toggleShowCurrency}>
        <span>{currency || 'Select One'} <img src='https://res.cloudinary.com/dn93xk5ni/image/upload/v1668764124/currency-exchange/down-arrow.png' alt='caret down icon' /></span>
      </div>
      {showCurrency && (
        <div className='currencies'>
          {MOCK_CURRENCIES?.map((currency) => <div className='option' key={currency} onClick={() => chooseCurrency(currency, label)}>{currency}</div>)}
        </div>
      )}
    </div>
  )
};

export default CurrencyDropdown;
