import React from 'react';

interface PriceProps {
  readonly currency: string;
  readonly num: number;
  readonly numSize: string;
}

function Price({ currency, num, numSize }: PriceProps) {
    return (
      <>
        {currency}<span className={numSize}>{num}</span>
      </>
    )
  }
  
export default Price