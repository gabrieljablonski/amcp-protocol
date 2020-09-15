const repl = require("repl");
repl.start('> ');

const { AMCPClient } = require("./src/client");
let amcp = new AMCPClient({host: "192.168.1.141"});

// amcp.connect();

// amcp.cinf().then(r=>{
// });

// amcp.infoConfig().then(r => {
//   r.parsedData
// });
