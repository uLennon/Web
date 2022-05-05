import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import user from 'App/Models/user'

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

    public async store({request, response,auth}: HttpContextContract){
    
        const email = request.input('email')
        const password = request.input('password')
        
        console.log(email)
        console.log(password)
        
        const use = await user.create({email, password})

        try{
            await auth.use('web').login(use)
            response.redirect().toRoute('principal')
        }catch {
            response.badRequest('invalido')
        }
    }
    
    public async estore({request, response,auth}: HttpContextContract){
    
        const email = request.input('email')
        const password = request.input('password')
        
        console.log(email)
        console.log(password)
        
        const use = await user.create(email,password)

        try{
            await auth.use('web').attempt(email,password)
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
