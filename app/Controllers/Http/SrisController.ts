import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Reporte from 'App/Models/Reporte'
import user from 'App/Models/user'


export default class SrisController {

    public async login({view}: HttpContextContract){
        return view.render('login')
    }
    public async perfil({view}: HttpContextContract){
        return view.render('perfil')
    }

    public async principal({view}: HttpContextContract){
        const reporte = await Reporte.all()

        return view.render('principal',{reporte: reporte})
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
    
    public async estore({request, response}: HttpContextContract){
        
        const email = request.input('email')
        const password = request.input('password')
        
        console.log(email)
        console.log(password)
        
        await user.create(email,password)
        response.redirect().toRoute('principal')
      
    }
    public async delete({response, auth}: HttpContextContract){
        await auth.use('web').logout()
        return response.redirect().toRoute('login')
    }


    public async reportar({request, response}: HttpContextContract){
        const titulo= request.input('titulo')
        const descricao = request.input('descricao')

        console.log(titulo)
        console.log(descricao)

        await Reporte.create(titulo,descricao)
        response.redirect().toRoute('principal')
    }

}
