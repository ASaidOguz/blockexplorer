import { Utils } from 'alchemy-sdk'
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Account({alchemy}) {
  const{url}=useParams()
  const[account,setAccount]=useState(null)
  const[assets,setAssets]=useState(null)
  console.log(url)
  
  useEffect(async()=>{
    setAccount(Utils.formatEther(await alchemy.core.getBalance(url,"latest")))
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
      
    </div>
    </div>
  )}
}
