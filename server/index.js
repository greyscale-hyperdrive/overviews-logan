const http = require('http');
const app = require('./application');
//http://localhost:3003/overviews/restaurant/1000000/overview

// let port = process.env.port || (process.argv[2] || 3003);
// port = (typeof port === 'number') ? port : 3003;

// if (!module.parent) {
//   app.listen(port);
// }
// console.log(`listening on port ${port}...`);

// app.listen(port, () => console.log(`listening on port ${port}...`));

const PORT = process.env.PORT || 3003;

const server = http.createServer(app);
server.listen(PORT, () => console.log(`listening on port ${PORT}...`));
