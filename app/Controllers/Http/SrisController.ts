import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SrisController {

    public async login({view}: HttpContextContract){
        return view.render('login')
    }

    public async principal({view}: HttpContextContract){
        return view.render('principal')
    }

    public async reporte({view}: HttpContextContract){
        return view.render('reporte')
    }

    public async registro({view}: HttpContextContract){
        return view.render('registro')
    }
    
}
