const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UrlSchema = new Schema({
    originalUrl: {
        type: String,
        required: true,
        unique: true // Ensure originalUrl is unique
    },
    shortUrl: { // Rename newUrl to shortUrl
        type: String,
        required: true,
        unique: true // Ensure shortUrl is unique
    }
});

const Url = mongoose.model("Url", UrlSchema);

module.exports = Url;
