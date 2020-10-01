const {BFast} = require('bfastnode');

exports.helloWorld = BFast.functions().onHttpRequest('/hello', (request, response) => {
    // your logic
    response.send({message:"Hello from BFast!"});
});

exports.startPage = BFast.functions().onGetHttpRequest('/admin/hello', (request, response)=>{
    //response.send(`<p>I am A Heading</p>`);
    response.send(`
    <p style="
    width:20%;
    text-align:center;
    margin-left:40%
    
    
    ">
    <label> User Name</label><br>
    <input type = "text" width="100%" placeholder= "Enter the name">
    </P><br>
    <p
    style="
    width:20%;
    text-align:center;
    margin-left:40%
    "
    >
    <label> Phone number</label><br>
    <input type = "text" width="100%" placeholder= "Enter the name">
    </p><br>
    <p
    style="
    width:20%;
    text-align:center;
    margin-left:40%
    "
    >
    <label> Email</label><br>
    <input type = "email" width="100%" placeholder= "Enter the name">
    </p><br>
    <p
    
    style="
    width:20%;
    text-align:center;
    margin-left:40%
    ">
    <label> Password</label><br>
    <input type = "password" width="100%" placeholder= "Enter the name">
    
</p><br>
<p style="
width:20%;
text-align:center;
margin-left:40%
">
    <label> Submit</label><br>
    <button width="50%" padding="40px">Submit</button>
    </p>

    
    
    
    
    
    
    `)
//     const readline = require('readline');
// const rl = readline.createInterface({
//  input: process.stdin,
//  output: process.stdout
// });
// rl.question('What is your name?', (name) => {
// //https://riptutorial.com/ 305
//  console.log(`Hello ${name}!`);
//  rl.close();
// });
})

