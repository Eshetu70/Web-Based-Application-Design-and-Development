const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB Connection (Direct)
const MONGO_URI = "mongodb+srv://eshetu:Mygrace%40%4007!@cluster0.qli7n5o.mongodb.net/nbda-project4?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Connected to nbda-project4"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Image Schema
const ImageSchema = new mongoose.Schema({
    imageUrl: String,
    category: String,
    uploadedBy: String // To track who uploaded the image
});
const Image = mongoose.model('Image', ImageSchema);

// Multer Storage Setup
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });

// Upload Image API
app.post('/upload', upload.single('image'), async (req, res) => {
    if (!req.file) return res.status(400).send("No file uploaded.");

    const imageUrl = `/uploads/${req.file.filename}`;
    const category = req.body.category || "uncategorized";
    const uploadedBy = req.body.uploadedBy || "guest";

    const newImage = new Image({ imageUrl, category, uploadedBy });
    await newImage.save();

    res.json({ message: "✅ Image uploaded successfully!", imageUrl, category });
});

// Get Images by Category
app.get('/images/:category', async (req, res) => {
    const images = await Image.find({ category: req.params.category });
    res.json(images);
});

// Get All Images
app.get('/images', async (req, res) => {
    const images = await Image.find();
    res.json(images);
});

// Delete Image (Only eshetuwek1@gmail.com Can Delete)
app.delete('/delete/:id', async (req, res) => {
    const { userEmail } = req.body; 

    if (userEmail !== "eshetuwek1@gmail.com") {
        return res.status(403).json({ error: "Unauthorized to delete images" });
    }

    await Image.findByIdAndDelete(req.params.id);
    res.json({ message: "✅ Image deleted successfully!" });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
