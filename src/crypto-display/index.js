import CryptoItem from "../item";

export default function CryptoDisplay({ cryptoList }) {
  const items = cryptoList.map((item) => (
    <CryptoItem
      key={item.id}
      id={item.id}
      name={item.id}
      rank={item.rank}
      symbol={item.symbol}
      priceUsd={item.priceUsd}
      explorer={item.explorer}
    />
  ));
  return (
    <table className='w-3/4 min-h-screen'>
      <tbody>
        <tr>
          <th className='w-1/12'>Name</th>
          <th className='w-2/12'>Rank</th>
          <th className='w-2/12'>Symbol</th>
          <th className='w-2/12'>Price (USD)</th>
          <th className='w-3/12'>Link</th>
        </tr>
        {items}
      </tbody>
    </table>
  );
}
