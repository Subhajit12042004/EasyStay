const mongoose =require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description: String,
    image:{
        filename:String,
        url:{
        type:String,
        default:"https://media.istockphoto.com/id/2252808820/photo/a-flock-of-migratory-birds-flying-at-sunset.jpg?s=2048x2048&w=is&k=20&c=Q1K0dOaJktBreDuOVjsQAaxtJiIme9bfOaNlXRZkmUw=",

        set: (v) => v ==="" ? "https://media.istockphoto.com/id/2252808820/photo/a-flock-of-migratory-birds-flying-at-sunset.jpg?s=2048x2048&w=is&k=20&c=Q1K0dOaJktBreDuOVjsQAaxtJiIme9bfOaNlXRZkmUw=" :v,
    },
},
    price:Number,
    location: String,
    country: String,
    reviews:[
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],

});

const Listing =mongoose.model("Listing",listingSchema);
module.exports =Listing;