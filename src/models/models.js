const { Schema, model } = require('mongoose');

const PatientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    hp: {
        type: String,
    },
    medic: {
        type: String
    },
    hid: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        required: true
    }
})

module.exports = model('Patient', PatientSchema)