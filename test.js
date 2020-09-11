const repl = require("repl");
repl.start('> ');

const { AMCPClient } = require("./src/client");

let amcp = new AMCPClient();
amcp.templateClear({});

// amcp.connect();

// let info = new INFO({channel: 1});

// setInterval(() => {
//     amcp.sendCommand(info).then(response => console.log(response));
// }, 5000);
