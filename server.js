const jsonServer = require('json-server');
const auth = require('json-server-auth')
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({noCors: true});
const port = 5000

server.db = router.db

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://movies-next-b6tkmcj75-igorcardosoys-projects.vercel.app')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

server.use(
  jsonServer.rewriter({
    '/*': '/$1',
  })
)

server.use(auth)
server.use(cors())
server.use(middlewares)
server.use(router)
server.listen(port, () => {
    console.log(`JSON Server is running in ${port}`);
});

module.exports = server;
