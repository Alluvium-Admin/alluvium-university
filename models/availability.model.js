import mongoose from 'mongoose'

const applicantsAvailabilitySchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    date: {
        type: String,
        required: true,
        // unique: true,
        trim: true
    },
    time: {
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true});

const ApplicantsAvailability = mongoose.models.ApplicantsAvailability || mongoose.model('ApplicantsAvailability', applicantsAvailabilitySchema);

export default ApplicantsAvailability;