import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Reporte from 'App/Models/Reporte'
import user from 'App/Models/user'


export default class SrisController {

    public async storee({view}: HttpContextContract){
        return view.render('login')
    }
    public async login({auth, view,request,response}: HttpContextContract){
        const email = request.input('email')
        const password = request.input('password')
        const reportes = await Database.rawQuery('select * from reportes where resolvido = 0')
        const user = await Database.rawQuery('select admin from users where email = ? and admin = 1',[email])
        var admin = 0

      for (const usery in user) {
        if(usery == '0'){
          admin = 1
        }
      }



        try{
            await auth.use('web').attempt(email,password)
            response.redirect().toRoute('principal',{admin:admin,reportes:reportes})
        }catch {
            
            return view.render('login')
        }
    }
    public async perfil({view}: HttpContextContract){
        const reportes = await Reporte.all()
        return view.render('perfil',{reportes:reportes})
    }

    public async principal({view,auth}: HttpContextContract){
        
        var authaux = auth.user?.email
    
        const user = await Database.rawQuery('select admin from users where email = ? and admin = 1',[authaux? authaux : ''])
    
        var admin = 0
    
        for (const usery in user) {
          if(usery == '0'){
            admin = 1
          }
        }
        const reportes = await Database.rawQuery('select * from reportes where resolvido = 0')
        return view.render('principal',{reportes: reportes,admin:admin})
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


    public async resolvido({view}: HttpContextContract){
         
        const reportes = await Database.rawQuery('select * from reportes where resolvido = 1')
        
        return view.render('resolvido',{reportes:reportes})
        
    }   


    public async voto({view,request}: HttpContextContract){
         
        const id = request.input('reporteIdVoto')
       
        await Database.rawQuery('update reportes set voto = voto+1 where id = ? ',[id])
        const reportes = await Database.rawQuery('select * from reportes')


        return view.render('principal',{reportes:reportes})
        
    }

    public async maisVotado({view}: HttpContextContract){
    
       
        const reportes = await Database.rawQuery('select * from reportes order by voto DESC ')


        return view.render('principal',{reportes:reportes})
        
    }


    public async resolvidoStore({view,request}: HttpContextContract){
        const id = request.input('reporteId')
       
        await Database.rawQuery('update reportes set resolvido = 1 where id = ? ',[id])
        const reportes = await Database.rawQuery('select * from reportes where resolvido = 0')
        
        return view.render('principal',{reportes:reportes})
    }
}
