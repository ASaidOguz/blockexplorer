import React from 'react'
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import BlockIcon from './icons/BlockIcon';
import Miner from './Miner';
import Transactions from './Transactions';

export default function Main({blockNumber,setBlockNumber,alchemy}) {
  
  useEffect(()=>{ async function getBlockNumber() {
        setBlockNumber(await alchemy.core.getBlockNumber()); }
        getBlockNumber()},[])
     let blockNos=[]
     for(let i=0;i<10;i++){
        blockNos.push(blockNumber-i)
     }
    if(blockNumber==""){
      return(<div className='App'>Loading</div>)
    }else{
    return (<>
    <div className='App'><h1>Ether-Searcher</h1></div>
      <div className="grid-container">
    <div className="grid-child purple">
       
      <div ><h2>Latest Block Numbers</h2></div>
      <div className='main'>
      {blockNos.map((blockno)=><div className='card'><BlockIcon/>Block Number:<Link to={'/block/'+`${blockno}`} 
                       > {blockno}</Link>&nbsp;&nbsp;
                       <Miner blockno={blockno}
                              alchemy={alchemy}
                              
                              /></div>)}
      </div>
     
    </div>
    <div className="grid-child green"><h2>Latest Transactions</h2>
    <div className='main'>
    <Transactions
    blockNumber={blockNumber}
    alchemy={alchemy}/>
    </div>
    </div>
       
    </div>
    </>
  )}
}
