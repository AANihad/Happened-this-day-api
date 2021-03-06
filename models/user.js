const mongoose = require ("mongoose"),
jwt = require("jsonwebtoken"),
bcrypt = require("bcrypt");

let userSchema = mongoose.Schema({
    username:{
        required: true,
        type : String,
    },
    password :{
        required: true,
        type :String,
    },
    email :{
        required :true,
        type :String,
    },
    firstName :{
        required: true,
        type :String,
    },
    lastName :{
        required: true,
        type :String,
    },
    is_Admin: {
        type: Boolean,
        default: false,
    },
});
userSchema.pre("save", async function (next) {
    try {
        if (this.isModified("password")) this.password = await bcrypt.hash(this.password, 13);
        next();
    } catch (e) {
        next(e);
    }
});
userSchema.methods.comparePasswords = async function (passwordSent, next) {
    try {
        return await bcrypt.compare(passwordSent, this.password);
    } catch (e) {
        next(e);
    }
};
userSchema.methods.insertToken = function () {
    let user = this.toObject();
    delete user.password;
    user.token = jwt.sign(
        {
            id: user._id,
            firstName: user.firstName,
        },
        process.env.SECRET_KEY,
        {
            expiresIn: "100h",
        }
    );
    return user;
};
module.exports = mongoose.model("user",userSchema);


