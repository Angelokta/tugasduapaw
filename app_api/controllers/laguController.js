// impor model Lagu
const laguSchema = require("../models/lagu")

// fungsi untuk mengambil semua lagu
const getAllLagu = async (req, res) => {
    try {
        const result = await laguSchema.find().populate("playlistId", "nama")
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// fungsi untuk mengambil lagu berdasarkan ID
const getLaguById = async (req, res) => {
    try {
        const result = await laguSchema.findById(req.params.id).populate("playlistId", "nama")
        if (!result) {
            res.status(400).json({ message: "Lagu tidak ditemukan" })
        } else {
            res.status(200).json(result)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// fungsi untuk menambahkan lagu baru
const createLagu = async (req, res) => {
    const lagu = new laguSchema({
        judul: req.body.judul,
        penyanyi: req.body.penyanyi,
        durasi: req.body.durasi,
        playlistId: req.body.playlistId
    })

    try {
        const hasil = await lagu.save()
        res.status(201).json(hasil)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// fungsi untuk update lagu berdasarkan ID
const updateLaguById = async (req, res) => {
    try {
        const result = await laguSchema.findById(req.params.id)
        if (!result) {
            res.status(400).json({ message: "Lagu tidak ditemukan" })
        } else {
            if (req.body.judul != null) {
                result.judul = req.body.judul
            }
            if (req.body.penyanyi != null) {
                result.penyanyi = req.body.penyanyi
            }
            if (req.body.durasi != null) {
                result.durasi = req.body.durasi
            }
            if (req.body.playlistId != null) {
                result.playlistId = req.body.playlistId
            }

            const updateLagu = await result.save()
            res.status(200).json(updateLagu)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// fungsi untuk menghapus lagu berdasarkan ID
const deleteLaguById = async (req, res) => {
    try {
        const result = await laguSchema.findById(req.params.id)
        if (!result) {
            res.status(400).json({ message: "Lagu tidak ditemukan" })
        } else {
            await result.deleteOne()
            res.status(200).json({ message: "Lagu berhasil dihapus" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getAllLagu, getLaguById, createLagu, updateLaguById, deleteLaguById }
