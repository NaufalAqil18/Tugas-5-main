const Route = use('Route')

Route.get('/', ({ view }) => view.render('welcome'))

Route.get('/barangs', 'BarangController.index') // Menampilkan semua barang
Route.get('/barangs/:id', 'BarangController.show') // Menampilkan satu barang
Route.post('/barangs', 'BarangController.store') // Menambahkan barang baru
Route.put('/barangs/:id', 'BarangController.update') // Update barang
Route.delete('/barangs/:id', 'BarangController.destroy') // Hapus barang

