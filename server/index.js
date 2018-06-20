const http = require('http');
const app = require('./application');


const PORT = process.env.PORT || 3003;

const server = http.createServer(app);
server.listen(PORT, () => console.log(`listening on port ${PORT}...`));
