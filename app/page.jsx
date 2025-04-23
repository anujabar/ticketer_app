import React from "react";
import TicketCard from "./(components)/TicketCard.jsx";

//root route
// [] path parameters
// () non-route folder
const getTickets=async ()=>{
  try{
    const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Tickets`,{
      cache:"no-store"// data is not cached, i.e. fetched everytime
    })
    return res.json()
  }
  catch(error){
    console.log("Failed to get tickets",error)
    return { tickets: [] };
  }
}

const Dashboard = async () => {
  const {tickets}=await getTickets()
  const uniqueCat=[
    ...new Set(tickets?.map(({category})=>category))
  ]
  console.log(uniqueCat)
  return <div className="p-5">
    <div>
      {tickets && uniqueCat?.map((cat,index)=>{
        return <div key={index} className="mb-4">
          <h2>{cat}</h2>
          <div className="lg:grid grid-cols-2 xl:grid-cols-4">
          {tickets.filter((ticket)=>{return ticket.category===cat}).map((t,_index)=>{
            return <TicketCard id={_index} key={_index} ticket={t}/>
          })}
          </div>
        </div>
      })}
    </div>
  </div>;
};

export default Dashboard;
