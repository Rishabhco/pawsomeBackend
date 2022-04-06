const mongoose=require('mongoose')

const petSchema=new mongoose.Schema({
    petid:{
        type:String,
        required:true,
        unique:true
    },
    petInfo:{
        name:{
            type:String,
            required:true,
        },
        category:{
            type:String,
            required:true,
        },
        type:{
            type:String,
            required:true,
        },
        expLevel:{
            type:String,
            required:true,
        },
        location:{
            type:String,
            required:true,
        },
        salary:{
            type:Number,
            required:true,
        },
        disabilityType:{
            type:String,
            required:true,
        },
        subUrl:{
            type:String,
            required:true,
        }
    },
    compInfo:{
        name:{
            type:String,
            required:true,
        },
        webUrl:{
            type:String,
            required:true,
        },
        size:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        bio:{
            type:String,
            required:true,
        },
        logoUrl:{
            type:String,
            required:true,
        }
    },
    jobDescp:{
        resp:{
            type:String,
            required:true,
        },
        reqSkillAndExp:{
            type:String,
            required:true,
        },
        abtRole:{
            type:String,
            required:true,
        },
        idealCdt:{
            type:String,
            required:false,
        },
        perksBfts:{
            type:String,
            required:false,
        },
        hiringProcess:{
            type:String,
            required:false,
        }
    },
    postedBy:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
        ref:'User'
    }
})

const Pets=mongoose.model('Pet',petSchema)
module.exports=Pets