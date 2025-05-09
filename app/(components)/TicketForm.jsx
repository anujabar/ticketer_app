"use client"
import { useRouter } from "next/navigation";
import React,{useState} from "react";

const TicketForm = ({ticket}) => {
    const editMode=ticket._id==="new"?false:true
    const router=useRouter()
    const startingTicketData={
        title:"",
        description:"",
        priority:1,
        progress:0,
        status:"not started",
        category:"Hardware Problem"
    }
    if(editMode){
        startingTicketData.title=ticket.title
        startingTicketData.description=ticket.description
        startingTicketData.priority=ticket.priority
        startingTicketData.progress=ticket.progress
        startingTicketData.status=ticket.status
        startingTicketData.category=ticket.category
    }
    const [formData,setFormData]=useState(startingTicketData)
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=async (e)=>{
        e.preventDefault()
        if(editMode){
            const response= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Tickets/${ticket._id}`,{
                method:"PUT",
                body:JSON.stringify({formData}),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            if(!response.ok){
                throw new Error("Failed to update ticket")
            }
        }
        else{
            const response= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Tickets`,{
                method:"POST",
                body:JSON.stringify({formData}),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            if(!response.ok){
                throw new Error("Failed to create ticket")
            }
        }
        router.refresh()
        router.push('/')
    }
  return (
    <div className="flex justify-center">
      <form className="flex flex-col gap-3 w-1/2" method="post" onSubmit={handleSubmit}>
        <h3>{editMode?"Update Your Ticket":"Create Your Ticket"}</h3>
        <label>Title</label>
        <input type="text" name="title" 
        id="title" onChange={handleChange} required={true} value={formData.title}/>
        <label>Description</label>
        <textarea name="description" 
        id="description" onChange={handleChange} required={true} value={formData.description} rows="5"/>
        <label>Category</label>
        <select name="category" value={formData.category} onChange={handleChange}>
            <option value="Hardware Problem">Hardware Problem</option>
            <option value="Software Problem">Software Problem</option>
            <option value="Project">Project</option>
        </select>
        <label>Priority</label>
        <div>
        <input type="radio" name="priority" 
        id="priority-1" onChange={handleChange} value="1" checked={formData.priority==1}/>
        <label>1</label>
        <input type="radio" name="priority" 
        id="priority-2" onChange={handleChange} value="2" checked={formData.priority==2}/>
        <label>2</label>
        <input type="radio" name="priority" 
        id="priority-3" onChange={handleChange} value="3" checked={formData.priority==3}/>
        <label>3</label>
        <input type="radio" name="priority" 
        id="priority-4" onChange={handleChange} value="4" checked={formData.priority==4}/>
        <label>4</label>
        <input type="radio" name="priority" 
        id="priority-5" onChange={handleChange} value="5" checked={formData.priority==5}/>
        <label>5</label>
        </div>
        <label>Progress</label>
        <input type="range" id='progress' value={formData.progress} min='0' max='100' onChange={handleChange}/>
        <label>Status</label>
        <select name="status" onChange={handleChange}>
            <option value='Not Started'>Not Started</option>
            <option value='Started'>Started</option>
            <option value='Done'>Done</option>
        </select>
        <input type="submit" className="btn" value={`${editMode?"Update":"Create Ticket"}`}/>
      </form>
    </div>
  )
}

export default TicketForm
