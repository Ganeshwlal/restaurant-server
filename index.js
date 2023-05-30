const jsonServer = require('json-server')

//create a json server app
const server = jsonServer.create()

//set up path for db.json
const router = jsonServer.router("db.json")

//retrs middleware used by json server
const middleware = jsonServer.defaults()

// setup port 
const port = process.env.PORT || 4000

//USE ROUTER MIDDLEWARE  in server
server.use(middleware)
server.use(router)

//app listen
server.listen(port,()=>{
    console.log(`JSON server started at port ${port}`);
})



