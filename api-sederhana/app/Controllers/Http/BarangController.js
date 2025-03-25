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

    async update({ params, request, response }) {
        const barang = await Barang.find(params.id)
        barang.merge(request.only(['nama', 'harga', 'stok']))
        await barang.save()
        return response.redirect('/barangs')
    }
    
    async destroy({ params, response }) {
        const barang = await Barang.find(params.id)
        await barang.delete()
        return response.redirect('/barangs')
    }
    
}

module.exports = BarangController
