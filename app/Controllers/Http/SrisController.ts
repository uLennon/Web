import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


export default class SrisController {

    public async login({view}: HttpContextContract){
        return view.render('login')
    }

    public async principal({view}: HttpContextContract){
    
        return view.render('principal')
    }

    public async reporte({view,auth}: HttpContextContract){
        await auth.use('web').authenticate()
        
        console.log(auth.user!)
        return view.render('reporte')
    }

    public async registro({view}: HttpContextContract){
        return view.render('registro')
    }

    public async store({request, response,auth}: HttpContextContract){
    
        const email = request.input('email')
        const password = request.input('password')
        
        console.log(email)
        console.log(password)

        try{
            await auth.use('web').attempt(email, password)
            response.redirect().toRoute('principal')
        }catch {
            response.badRequest('invalido')
        }
    }
    
    public async delete({response, auth}: HttpContextContract){
        await auth.use('web').logout()
        return response.redirect().toRoute('login')
    }

}
