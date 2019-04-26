const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Task title is required'],
        unique: true
    },
    description: {
        type: String,
        trim: true,
        default: ''
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    },
}, {
    timestamps: true
});
module.exports = mongoose.model('Task', taskSchema);