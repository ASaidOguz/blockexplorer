import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Utils } from 'alchemy-sdk'
import CopyToClipboard from 'react-copy-to-clipboard'

export default function OneBlock({alchemy,block,setBlock}) {
  
  const {url}=useParams()
  //console.log(url)
  useEffect(async()=>{
  setBlock(await alchemy.core.getBlock(Number(url)))
  },[])
  console.log(block)
  function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }
  return (
    <div className='App'><h1><strong>Block Details</strong></h1>
    <div className='card'><strong>Block Number:</strong>&nbsp;{block.number}&nbsp;&nbsp;<CopyToClipboard text={block.number}><button className='btn'>c</button></CopyToClipboard></div>
    <div className='card'><strong>Block Hash:</strong>&nbsp;{block.hash}&nbsp;&nbsp;<CopyToClipboard text={block.hash}><button className='btn'>c</button></CopyToClipboard></div>
    <div className='card'><strong>Parent Hash:</strong>&nbsp;{block.parentHash}&nbsp;&nbsp;<CopyToClipboard text={block.parentHash}><button className='btn'>c</button></CopyToClipboard></div>
    {block.transactions&&<div className='card'><strong>Block Transactions:</strong>&nbsp;{block.transactions.length}</div>}
    {block.timestamp&&<div className='card'><strong>Block Timestamp:</strong>&nbsp;{timeConverter(block.timestamp)}</div>}
    {block.miner&&<div className='card'><strong>Block Validator:</strong>&nbsp;{block.miner}&nbsp;&nbsp;<CopyToClipboard text={block.miner}><button className='btn'>c</button></CopyToClipboard></div>}
    {block.gasLimit&&<div className='card'><strong>Gas Limit:</strong>&nbsp;{Utils.formatUnits(block.gasLimit,"wei")} wei</div>}
    {block.gasUsed&&<div className='card'><strong>Gas Used:</strong>&nbsp;{Utils.formatUnits(block.gasUsed,)} ETH</div>}
    {block.baseFeePerGas&&<div className='card'><strong>Base Fee per Gas:</strong>&nbsp;{Utils.formatEther(block.baseFeePerGas)} ETH</div>}
    </div>
  )
}
