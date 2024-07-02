const jsonServer = require('json-server');
const auth = require('json-server-auth')
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({noCors: true});
const port = 3500

server.db = router.db

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

server.use(auth)
server.use(cors())
server.use(middlewares)
server.use(router)
server.listen(port, () => {
    console.log(`JSON Server is running in ${port}`);
});
