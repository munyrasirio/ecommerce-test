const jsonServer = require('json-server');
const data = require('./db.json');

const server_port = 3001;
const router = jsonServer.router(data);
const server = jsonServer.create();

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

server.use(router);
server.listen(server_port, () => {
  console.log(' Json Server is Up & Running at port ' + server_port + ' ');
});