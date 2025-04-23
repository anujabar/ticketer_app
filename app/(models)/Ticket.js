import mongoose from "mongoose";

mongoose.connect(process.env.MONGOURL)
// mongoose.Promise = global.Promise;

const ticketSchema=mongoose.Schema({
    title:{type:String},
    description:{type:String},
    category:{type:String},
    priority:{type:String},
    progress:{type:String},
    status:{type:String},
    active:{type:Boolean}
},
{
    timestamps:true
})

const Ticket=mongoose.models.ticket || mongoose.model("ticket",ticketSchema)
export default Ticket