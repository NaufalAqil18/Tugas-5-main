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

  async store({ request, response, session }) {
    const data = request.only(['nama', 'harga', 'stok'])
    await Barang.create(data)

    session.flash({ success: 'Barang berhasil ditambahkan!' })
    return response.redirect('/barangs')
  }

  async edit({ params, view }) {
    const barang = await Barang.find(params.id)
    return view.render('barangs.edit', { barang })
  }

  async update({ params, request, response, session }) {
    const barang = await Barang.find(params.id)
    if (!barang) {
      session.flash({ error: 'Barang tidak ditemukan!' })
      return response.redirect('/barangs')
    }
    
    const data = request.only(['nama', 'harga', 'stok'])
    console.log('ID Barang:', params.id)
    console.log('Data yang akan diupdate:', data)
    
    try {
      barang.merge(data)
      await barang.save()
      console.log('Barang setelah update:', barang.toJSON())
      
      session.flash({ success: 'Barang berhasil diperbarui!' })
    } catch (error) {
      console.error('Error saat update:', error)
      session.flash({ error: 'Gagal memperbarui barang!' })
    }
    
    return response.redirect('/barangs')
  }

  async destroy({ params, response, session }) {
    const barang = await Barang.find(params.id)
    await barang.delete()

    session.flash({ success: 'Barang berhasil dihapus!' })
    return response.redirect('/barangs')
  }
}

module.exports = BarangController
