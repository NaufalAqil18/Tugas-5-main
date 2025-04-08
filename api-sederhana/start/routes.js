const Route = use('Route')
const BarangController = use('App/Controllers/Http/BarangController')

Route.get('/', ({ view }) => view.render('welcome'))

Route.get('/barangs', 'BarangController.index')
Route.get('/barangs/:id', 'BarangController.show')
Route.get('/barangs/:id/edit', 'BarangController.edit')
Route.post('/barangs', 'BarangController.store')
Route.put('/barangs/:id', 'BarangController.update')
Route.post('/barangs/:id', 'BarangController.destroy')


