const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    category: {
        type: String,
        required: [true, 'Category is required'],
        enum: [
            "Food and Nutrition Services",
            "Recreational Event",
            "Voluntary",
            "Catering",
            "School Lunch"
        ]
    },
    title: { type: String, required: [true, 'Title is required'] },
    hostName: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    startDateTime: { type: Date, required: [true, 'Start DateTime is required'] },
    endDateTime: { type: Date, required: [true, 'End DateTime is required'] },
    location: { type: String, required: [true, 'Location is required'] },
    details: { type: String, required: [true, 'Details are required'] },
    image: { type: String, required: [true, 'Image is required'] },
    pdfUpload: { type: String } // Store uploaded PDF file path
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
