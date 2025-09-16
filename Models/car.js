
const mongoose=require("mongoose")

const CarShema=mongoose.Schema({
    title :{ type: String, required: true },
    description :String,
    make :{ type: String, required: true },
    year :{ type: Number, required: true },
    price :{ type: Number, required: true },
    mileage : { type: Number, required: true },
    fuel_type :String,
    transmission :String,
    condition :String,
    engine_size :{ type: Number, required: true },
    color :String,
    power_hp :Number,
    negotiable :Boolean,
    location :{ type: String, required: true },
    images :{ type: [String], required: true },
    views_count :Number,
    status :String,
    Seller:
    {
        type:mongoose.Types.ObjectId,
        ref:"user"
        
    }
    
},{
		timestamps: true,
	})

const Car=mongoose.model("Car",CarShema)
module.exports=Car