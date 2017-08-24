import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
const Schema = mongoose.Schema;

let UserSchema = new Schema({

    Email: {
        type: String,
        required: true
    },
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }

});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserSchema);
