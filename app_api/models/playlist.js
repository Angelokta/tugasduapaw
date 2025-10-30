const mongoose = require('mongoose') // impor mongoose

// skema untuk collection playlist
const playlistSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true,
        trim: true
    },
    deskripsi: {
        type: String,
        trim: true
    }
})

// sertakan skema playlist ke dalam model Playlist
const Playlist = mongoose.model("Playlist", playlistSchema)

// ekspor model Playlist
module.exports = Playlist
