import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import { Routes,Route,Link,NavLink } from 'react-router-dom';
import './App.css';

import OneBlock from './components/OneBlock';
import Contact from './components/Contact';
import Main from './components/Main';
import './style.css'
import OneTransaction from './components/OneTransaction';
import Account from './components/Account';


// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};


// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState("");
  const [block,setBlock]=useState({})
  return(
    <>
    
    <nav>
      <div className='App'><NavLink to='/'>Main Page</NavLink></div>
      <div className='App'><NavLink to='/contact'>Contact</NavLink></div>
    </nav>
    <Routes>
      <Route path='/' element={<Main blockNumber={blockNumber}
                               setBlockNumber={setBlockNumber}
                               alchemy={alchemy}
                               block={block}/>}/>
      <Route path='/block/:url' element={<OneBlock  blockNumber={blockNumber}
                                                    alchemy={alchemy}
                                                    block={block}
                                                    setBlock={setBlock}/>} />
      <Route path='/transactions/:url' element={<OneTransaction
      alchemy={alchemy}/>}/>
      <Route path='/accounts/:url' element={<Account
      alchemy={alchemy}/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App;
/* <div className="App">Latest Block Number: {blockNumber}
   <OneBlock
  blockNumber={blockNumber}
  alchemy={alchemy}/> 
  <MemoizedBlock
  alchemy={alchemy}
  blockNumber={blockNumber}
  />
  </div>;*/ 