// impor model Playlist
const playlistSchema = require("../models/playlist")

// fungsi untuk mengambil semua playlist
const getAllPlaylist = async (req, res) => {
    try {
        const result = await playlistSchema.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// fungsi untuk mengambil playlist berdasarkan ID
const getPlaylistById = async (req, res) => {
    try {
        const result = await playlistSchema.findById(req.params.id)
        if (!result) {
            res.status(400).json({ message: "Playlist tidak ditemukan" })
        } else {
            res.status(200).json(result)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// fungsi untuk membuat playlist baru
const createPlaylist = async (req, res) => {
    const playlist = new playlistSchema({
        nama: req.body.nama,
        deskripsi: req.body.deskripsi,
    })

    try {
        const hasil = await playlist.save()
        res.status(201).json(hasil)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// fungsi untuk memperbarui playlist berdasarkan ID
const updatePlaylistById = async (req, res) => {
    try {
        const result = await playlistSchema.findById(req.params.id)
        if (!result) {
            res.status(400).json({ message: "Playlist tidak ditemukan" })
        } else {
            if (req.body.nama != null) {
                result.nama = req.body.nama
            }
            if (req.body.deskripsi != null) {
                result.deskripsi = req.body.deskripsi
            }

            const updatePlaylist = await result.save()
            res.status(200).json(updatePlaylist)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// fungsi untuk menghapus playlist berdasarkan ID
const deletePlaylistById = async (req, res) => {
    try {
        const result = await playlistSchema.findById(req.params.id)
        if (!result) {
            res.status(400).json({ message: "Playlist tidak ditemukan" })
        } else {
            await result.deleteOne()
            res.status(200).json({ message: "Playlist berhasil dihapus" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getAllPlaylist, getPlaylistById, createPlaylist, updatePlaylistById, deletePlaylistById }
