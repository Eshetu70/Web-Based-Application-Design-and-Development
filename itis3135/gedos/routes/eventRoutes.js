const express = require('express');
const multer = require('multer');
const Event = require('../models/Event');

const router = express.Router();

// File upload setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// Create Event with File Upload
router.post('/create', upload.single('pdfUpload'), async (req, res) => {
    try {
        const {
            category, title, hostName, startDateTime,
            endDateTime, location, details, image
        } = req.body;

        const newEvent = new Event({
            category, title, hostName, startDateTime,
            endDateTime, location, details, image,
            pdfUpload: req.file ? req.file.path : null
        });

        await newEvent.save();
        res.status(201).json({ message: 'Event created successfully', event: newEvent });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
