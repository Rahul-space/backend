const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    gender:{type: String,required: true},
    password: { type: String, required: true },
    profilePic: { type: String, defaut: "" },
    isAdmin: { type: Boolean, default: false },
    address: {type: Object, required: true},
    contact: {type: Object,required: true},
    dob:{type: Object,required: true}
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);