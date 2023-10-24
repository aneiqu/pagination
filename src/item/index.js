export default function CryptoItem({
  name,
  description,
  rank,
  symbol,
  priceUsd,
  explorer,
}) {
  return (
    <tr className='border-b-2'>
      <td className='w-1/12 text-center'>{name}</td>
      <td className='w-2/12 text-center'>{rank}</td>
      <td className='w-2/12 text-center'>{symbol}</td>
      <td className='w-2/12 text-center'>{priceUsd}</td>
      <td className='w-3/12 text-center'>{explorer}</td>
    </tr>
  );
}
