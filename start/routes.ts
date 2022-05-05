/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/login','SrisController.login').as('login')
Route.post('/login','SrisController.store').as('store')

Route.group(()=>{
    Route.get('/principal','SrisController.principal').as('principal')
    Route.get('/reporte','SrisController.reporte').as('reporte')
}).middleware('auth')

Route.post('/reporte','SrisController.reportar').as('reportar')


Route.get('/registro','SrisController.registro').as('registro')
Route.post('/registro','SrisController.estore').as('estore')


Route.get('/perfil','SrisController.perfil').as('perfil')
Route.get('/logout','SrisController.delete').as('delete')
