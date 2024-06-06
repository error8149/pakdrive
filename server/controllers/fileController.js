// controllers/fileController.js
const File = require('../models/File');

exports.uploadFile = async (req, res) => {
  const { originalname, path } = req.file;

  try {
    const file = new File({ name: originalname, path, owner: req.user._id });
    await file.save();
    res.status(201).json(file);
  } catch (error) {
    res.status(500).json({ error: 'File upload failed' });
  }
};

exports.getFiles = async (req, res) => {
  try {
    const files = await File.find({ owner: req.user._id });
    res.json(files);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch files' });
  }
};
