import React, { useState } from 'react';
import Coin from './Coin';
import headsPic from '../assets/heads.jpg';
import tailsPic from '../assets/tails.jpg';

function CoinContainer () {
  const [numFlips, setFlips] = useState(0);
  const [numHeads, setHeads] = useState(0);
  const [numTails, setTails] = useState(0);
  const [currCoin, setCoin] = useState(null);
  const coinSides = [
    { side: 'heads', imgSrc: headsPic },
    { side: 'tails', imgSrc: tailsPic }
  ];

  const flipCoin = () => {
    const chosen = Math.floor(Math.random() * coinSides.length);
    console.log(chosen);
    setFlips(numFlips + 1);
    if (coinSides[chosen].side === 'heads') {
      setHeads(numHeads + 1);
      setCoin(coinSides[chosen].imgSrc);
    } else {
      setTails(numTails + 1);
      setCoin(coinSides[chosen].imgSrc);
    }
  };

  const handleClick = () => {
    flipCoin();
  };

  return (
    <div className='container flex flex-col justify-center align-middle text-center'>
      <h1 className='text-3xl m-4'>Let's flip a coin!</h1>
      <Coin coin={ currCoin } />
      <button className='rounded bg-sky-500 w-fit mx-auto p-2 m-2 text-lg font-bold' onClick={ handleClick }>Flip Coin</button>
      <p className='p-4'>Out of { numFlips } there have been { numHeads } heads and { numTails } tails</p>
    </div>
  );
}

export default CoinContainer;