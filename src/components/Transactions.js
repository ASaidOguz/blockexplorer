
import { Utils } from 'alchemy-sdk'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import BlockIcon from './icons/BlockIcon'
import CopyToClipboard from 'react-copy-to-clipboard'
export default function Transactions({blockNumber,alchemy}) {
  const[txs,setTxs]=useState(null)
  
  useEffect(()=>{ async function getTrans(){
    const transect=await alchemy.core.getBlockWithTransactions(
       blockNumber)
       setTxs(transect)
     }
     getTrans()
     console.log(txs)},[])
 
    
 
  if(txs==null){
    return(<div>Loading...</div>)
  }else{
  return (
    <div>{txs.transactions.slice(0,10).map((tx)=>
      <div className='card'><BlockIcon/>
      Tx Hash:&nbsp;<Link to={'/transactions/'+`${tx.hash}`}>{tx.hash.slice(0,5)}...{tx.hash.slice(-5)}</Link>&nbsp;
      <CopyToClipboard text={tx.hash}><button className='btn'>c</button></CopyToClipboard>&nbsp;
      From:&nbsp;<Link to={'/accounts/'+`${tx.from}`}>{tx.from.slice(0,5)}...{tx.from.slice(-5)}</Link>
      &nbsp;
      <CopyToClipboard text={tx.from}><button className='btn'>c</button></CopyToClipboard>&nbsp;
      To:&nbsp;<Link to={'/accounts/'+`${tx.to}`}>{tx.to.slice(0,5)}...{tx.to.slice(-5)}</Link>&nbsp;
      <CopyToClipboard text={tx.to}><button className='btn'>c</button></CopyToClipboard>&nbsp;
      &nbsp;&nbsp;&nbsp; Value:{Utils.formatEther(tx.value)} ETH </div>
    )}</div>
  )}
}