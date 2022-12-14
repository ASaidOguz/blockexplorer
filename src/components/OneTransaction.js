import { Utils } from 'alchemy-sdk'
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
export default function OneTransaction({alchemy}) {
    const[transaction,setTransaction]=useState(null)
    const {url}=useParams()
    console.log(url)
    useEffect(async()=>{
          setTransaction(await alchemy.core.getTransactionReceipt(url))
    },[url])
    if(transaction==null){
        return(<div className='App'>Loading</div>)
    }else{
  return (
    <>
    <div className='App'><h1><strong>Transaction Details</strong></h1></div>
    <div className='card'>
      <div><strong>From:</strong> {transaction.from}</div>
      <div><strong>To:</strong> {transaction.to}</div>
      <div><strong>Contract Address: </strong> {transaction.contractAdress}</div>
      <div><strong>Transaction Index: </strong> {transaction.transactionIndex}</div>
      <div><strong>Gas Used: </strong>{Utils.formatEther(transaction.gasUsed)} ETH</div>
      <div><strong>Logs Bloom:</strong> {transaction.logsBloom.slice(0,5)}...{transaction.logsBloom.slice(-5)}</div>
      <div><strong>Block Hash:</strong> {transaction.blockHash}</div>
      <div><strong>Transaction Hash:</strong> {transaction.transactionHash}</div>
      <div><strong>Block Number:</strong> {transaction.blockNumber}</div>
      <div><strong>Confirmations: </strong>{transaction.confirmations}</div>
      <div><strong>Cumulative Gas used:</strong> {Utils.formatEther(transaction.cumulativeGasUsed)} ETH</div>
      <div><strong>Effective Gas Price:</strong> {Utils.formatEther(transaction.effectiveGasPrice)} ETH</div>
      <div><strong>Status:</strong> {transaction.status}</div>
      <div><strong>Type:</strong> {transaction.type}</div>
      <div><strong>Byzantium:</strong> {JSON.stringify(transaction.byzantium)}</div>
     
    </div>
    </>
  )}
}
