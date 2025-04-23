import TicketForm from "@/app/(components)/TicketForm.jsx";
import React from "react";

const  getTicketById=async (id)=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Tickets/${id}`,{
      cache:"no-store"
    })
    if(!res.ok){
      throw new Error("Failed to get Ticket")
    }
    return res.json()
}

const TicketPage = async ({ params }) => { //params.id to access id or const {id}=params
  const editMode=params.id==='new'?false:true
  let updateTicketData;
  if(editMode){
    updateTicketData=await getTicketById(params.id)
    updateTicketData=updateTicketData.foundTicket
    console.log(updateTicketData)
  }
  else{
    updateTicketData={
      _id:"new"
    }
  }
  return <TicketForm ticket={updateTicketData}/>
};

export default TicketPage;
