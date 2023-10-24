import { useState } from "react";
import CryptoDisplay from "./crypto-display";
import AppPagination from "./paginaton";

function App() {
  const [cryptoList, setCryptoList] = useState([]);

  return (
    <div className='flex flex-col items-center min-h-screen'>
      <>
        <CryptoDisplay cryptoList={cryptoList} />
      </>
      <>
        <AppPagination setCryptoList={(c) => setCryptoList(c)} />
      </>
    </div>
  );
}

export default App;
