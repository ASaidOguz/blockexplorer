import React from 'react'
import { useState,useEffect } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
export default function Miner({blockno,alchemy}) {
  const[miner,setMiner]=useState("")
    
    useEffect(()=>{ async function getMiner(){
        setMiner((await alchemy.core.getBlock(((blockno)))))
    }
    
   getMiner()
   console.log(blockno)
},[blockno])
   
 
  
    return (
    <>
    {miner.miner&&<>
     Validator Address: <Link to={'/accounts/'+`${miner.miner}`}>{miner.miner.slice(0,5)}...{miner.miner.slice(-5)}</Link>&nbsp;<CopyToClipboard text={miner.miner}><button className='btn'>c</button></CopyToClipboard>
     &nbsp;
     Transactions:{miner.transactions.length} 
    </>}
    </>
  )
}
