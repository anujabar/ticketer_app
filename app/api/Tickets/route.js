import Ticket from "../../(models)/Ticket.js";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        const body=await req.json()//converts json to javascript object
        // console.log("Body:",body)
        const ticketData=body.formData
        // console.log("Ticket data:",ticketData)
        const ticket=await Ticket.create(ticketData)
        // console.log(ticket)
        return NextResponse.json({message:"Ticket created"},{status:201})
    }
    catch(error){
        return NextResponse.json({message:"Error",error},{status:500})//sends a json response
    }
}

export async function GET(){
    try{
        const tickets=await Ticket.find({})//find all
        return NextResponse.json({tickets},{status:201})
    }
    catch(error){
        return NextResponse.json({message:"Error",error},{status:500})
    }
}