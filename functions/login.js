const {BFast} = require('bfastnode');


exports.loginForm = BFast.functions().onHttpRequest('/login',(request, response)=>{
    response.send(`
    <html>
        <title></title>
        <body>
        <p>Login Page</p>
        </body>
    </html>
    `)
})