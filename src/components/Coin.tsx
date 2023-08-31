import React from 'react';

function Coin ({ coin }) {
  return (
    <div className='flex justify-center'>
      <img src={ coin } className='w-24 h-24' />
    </div>
  );
}

export default Coin;