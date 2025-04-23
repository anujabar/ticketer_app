import React from 'react'

const StatusDisplay = ({status}) => {
  const getColour=(status)=>{
    let colour="bg-slate-700"
    console.log(status)
    switch (status.toLowerCase()){
      case "done":
        colour="bg-green-200"
        return colour
      case "started":
        colour="bg-yellow-200"
        return colour
      case "not started":
        colour="bg-red-200"
        return colour
      default:
        return colour
    }
  }
  return (
    <span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColour(status)}`}>
        {status}
    </span>
  )
}

export default StatusDisplay
