import { Utils } from 'alchemy-sdk'
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Account({alchemy}) {
  const{url}=useParams()
  const[account,setAccount]=useState(null)
  const[assets,setAssets]=useState(null)
  
  
  useEffect(async()=>{
    setAccount(Utils.formatEther(await alchemy.core.getBalance(url,"latest")))
    const balances=(await alchemy.core.getTokenBalances(url))
    const nonZeroBalances = balances.tokenBalances.filter((token) => {
        return token.tokenBalance !== "0";
        
      });
       // Counter for SNo of final output
  let i = 1;
  let tokens=[]
  // Loop through all tokens with non-zero balance
  for (let token of nonZeroBalances) {
    // Get balance of token
    let balance = token.tokenBalance;

    // Get metadata of token
    const metadata = await alchemy.core.getTokenMetadata(token.contractAddress);

    // Compute token balance in human-readable format
    balance = balance / Math.pow(10, metadata.decimals);
    balance = balance.toFixed(2);
    tokens.push({
        metadata:metadata,
        balance:balance
    })
    // Print name, balance, and symbol of token
    console.log(`${i++}. ${metadata.name}: ${balance} ${metadata.symbol}`);
  }
  console.log(tokens)
 setAssets(tokens)
},[url])
    if(account==null){
        return(
            <div className='App'><h2><strong>Loading...</strong></h2></div>
        )
    }else{
    return (
        <div className='App'>
            <h1><strong>Account Details</strong></h1>
    <div className='main'>
        <div className='card'><strong>Account Address:</strong>&nbsp;{url}</div>
        <div className='card'><strong>Balance:</strong>&nbsp;{(account)}&nbsp; ETH</div>
        <div className='App'><strong><h2>=Token Balances=</h2></strong></div>
        {!assets&&<div className='App'><strong>Loading for Tokens Pls Wait...</strong></div>}
        {assets&&<div className='card'>{assets.map((asset)=><div>
        <strong>Asset Name:</strong>&nbsp;&nbsp;{asset.metadata.name}&nbsp;&nbsp;
        <strong>Asset Balance:</strong>&nbsp;&nbsp;{asset.balance}&nbsp;&nbsp;
        <strong>Asset Symbol:</strong>&nbsp;&nbsp;{asset.metadata.symbol}&nbsp;&nbsp;</div>)}</div>}

    </div>
    </div>
  )}
}
