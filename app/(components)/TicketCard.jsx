import React from 'react'
import DeleteBlock from './DeleteBlock.jsx'
import PriorityDisplay from './PriorityDisplay.jsx'
import ProgressDisplay from './ProgressDisplay.jsx'
import StatusDisplay from './StatusDisplay.jsx'
import Link from 'next/link.js'

const TicketCard = ({ticket}) => {
  const formatTime=(timestamp)=>{
    const options={
      year:"numeric",
      month:"2-digit",
      day:"2-digit",
      hour:"2-digit",
      minute:"2-digit",
      hour12:true
    }
    const date=new Date(timestamp)
    const formatted=date.toLocaleString("en-US",options)
    return formatted
  }
  return (
    <div className='flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2'>
      <div className='flex mb-3'>
        <PriorityDisplay priority={ticket.priority}/>
        <div className='ml-auto'>
          <DeleteBlock id={ticket._id}/>
        </div>
      </div>
      <Link href={`/TicketPage/${ticket._id}`} style={{display:"contents"}}>
        <h4>{ticket.title}</h4>
        <hr className='h-px border-0 bg-page mb-2'/>
        <p className='whitespace-pre-wrap'>{ticket.description}</p>
        <div className='flex-grow'></div>
        <div className='flex mt-2'>
          <div className='flex flex-col'>
            <p className='text-xs my-1'>{`${formatTime(ticket.createdAt)}`}</p>
            <ProgressDisplay progress={ticket.progress}/>
          </div>
          <div className='ml-auto flex items-end'>
            <StatusDisplay status={ticket.status}/>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default TicketCard
