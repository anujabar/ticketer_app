import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function DELETE(req,{params}){
    try{
        const {id}=params
        await Ticket.findByIdAndDelete(id)
        return NextResponse.json({message:"Deleted"},{status:200})
    }
    catch(error){
        return NextResponse.json({message:"Error",error},{status:500})
    }
}

export async function GET(req,{params}){
    try{
        const {id}=params
        const foundTicket=await Ticket.findOne({_id:id})
        return NextResponse.json({message:"Found",foundTicket},{status:200})
    }
    catch(error){
        return NextResponse.json({message:"Error",error},{status:500})
    }
}
export async function PUT(req,{params}){
    try{
        const {id}=params
        const body=await req.json()
        const ticketData=body.formData
        const updatedTicket=await Ticket.findByIdAndUpdate(id,ticketData)
        return NextResponse.json({message:"Updated"},{status:200})
    }
    catch(error){
        return NextResponse.json({message:"Error",error},{status:500})
    }
}
