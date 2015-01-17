var net = require('net'),
    port = process.argv[2];
var server = net.createServer(function(socket) {
    date = new Date();
    socket.write(date.getFullYear() + "-" + date.getMonth()+1 + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes());
    socket.write("\n");
    socket.end();
})
server.listen(port);