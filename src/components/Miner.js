import React from 'react'
import { useState,useEffect } from 'react'
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
     Validator Address: {(miner.miner).slice(0,5)}...{miner.miner.slice(-5)}&nbsp;Transactions:{miner.transactions.length}
    </>}
    </>
  )
}
