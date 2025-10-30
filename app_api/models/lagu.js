const mongoose = require('mongoose') // impor mongoose

// skema untuk collection lagu
const laguSchema = new mongoose.Schema({
    judul: {
        type: String,
        required: true, // wajib diisi
        trim: true
    },
    penyanyi: {
        type: String,
        required: true,
        trim: true
    },
    playlistId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Playlist", // relasi ke koleksi playlist
        required: true
    }
})

// sertakan skema lagu ke dalam model Lagu
const Lagu = mongoose.model("Lagu", laguSchema)

// ekspor model Lagu
module.exports = Lagu
