const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
  name: {
    type: String,
    unique:true,
  },
  contactName: String,
  pincode: Number,
  location: String,
  website: String,
  phoneNumber: 
  {
    type:Number,
    unique:true,
    valdate:
    {
      validator: ()=>
      {
        return this.phoneNumber.length==10;
      }
    }
  },
  averageDailyTransactions: Number,
});
module.exports  = mongoose.model('Restaurant', restaurantSchema);
