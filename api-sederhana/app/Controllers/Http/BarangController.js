const Barang = use('App/Models/Barang')

class BarangController {
    async index({ view }) {
        const barangs = await Barang.all()
        return view.render('barangs.index', { barangs: barangs.toJSON() })
    }

    async show({ params, view }) {
        const barang = await Barang.find(params.id)
        return view.render('barangs.show', { barang })
    }

    async store({ request, response }) {
        const { nama, harga, stok } = request.only(['nama', 'harga', 'stok'])
        const barang = new Barang()
        barang.nama = nama
        barang.harga = harga
        barang.stok = stok
        await barang.save()
        return response.redirect('/barangs')
    }

    // **Mengupdate barang berdasarkan ID**
    async update({ params, request, response }) {
        const barang = await Barang.find(params.id)
        if (!barang) {
        return response.status(404).json({ message: 'Barang tidak ditemukan' })
        }

        const { nama, harga, stok } = request.only(['nama', 'harga', 'stok'])
        barang.nama = nama || barang.nama
        barang.harga = harga || barang.harga
        barang.stok = stok || barang.stok
        await barang.save()

        return response.json({ message: 'Barang berhasil diperbarui', data: barang })
    }
    
    // **Menghapus barang berdasarkan ID**
    async destroy({ params, response }) {
        const barang = await Barang.find(params.id)
        if (!barang) {
        return response.status(404).json({ message: 'Barang tidak ditemukan' })
        }

        await barang.delete()
        return response.json({ message: 'Barang berhasil dihapus' })
    }
    
}

module.exports = BarangController
