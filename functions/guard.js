const {BFast} = require('bfastnode');

exports.adminGuard = BFast.functions().onGuard('/admin', (request, response, next)=>{
    if(request.query.role==='admin'){
        next();
    }else{
        response.redirect('/login')
        // response.send('Your not ad admin')
    }
});