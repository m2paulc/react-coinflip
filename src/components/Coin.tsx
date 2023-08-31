interface CoinProps {
  coin: string;
}

function Coin ({ coin }: CoinProps) {
  return (
    <div className='flex justify-center'>
      <img src={ coin } className='w-24 h-24 border-none' />
    </div>
  );
}

export default Coin;