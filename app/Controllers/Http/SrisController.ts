import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Reporte from 'App/Models/Reporte'
import user from 'App/Models/user'


export default class SrisController {

    public async storee({view}: HttpContextContract){
        return view.render('login')
    }
    public async login({auth, view,request,response}: HttpContextContract){
        const email = request.input('email')
        const password = request.input('password')
        
        try{
            await auth.use('web').attempt(email,password)
            response.redirect().toRoute('principal')
        }catch {
            
            return view.render('login')
        }
    }
    public async perfil({view}: HttpContextContract){
        return view.render('perfil')
    }

    public async principal({view}: HttpContextContract){
        const reportes = await Reporte.all()
        console.log(reportes)
        return view.render('principal',{reportes: reportes})
    }

    public async reporte({view}: HttpContextContract){
      
        return view.render('reporte')
    }

    public async registro({view}: HttpContextContract){
        return view.render('registro')
    }

    public async criarConta({view,request}: HttpContextContract){
    
        const email = request.input('email')
        const password = request.input('password')
        
        await user.create({email, password})
        return view.render('login')
    }
    
    public async delete({response, auth}: HttpContextContract){
        await auth.use('web').logout()
        return response.redirect().toRoute('login')
    }


    public async registrar({request, response}: HttpContextContract){
        const data = request.only(['titulo','descricao'])
        await Reporte.create(data)
       
        response.redirect().toRoute('principal',{titulo: data.titulo, descricao: data.descricao})
    }
}
