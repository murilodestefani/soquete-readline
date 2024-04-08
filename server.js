const net = require('net');
const readline = require('readline');

const PORT = 12345;

const rlServer = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const connectdClients = [];

function sendMessage(message) {
  connectdClients.forEach((client) => {
    client.write(message);
  });
}

const server = net.createServer((socket) => {
  console.log('Cliente conectado:', socket.remoteAddress.toString('utf8'));
  connectdClients.push(socket);

  rlServer.on('line', (input) => {
    if (input.toLowerCase() === 'exit') {
      socket.end();
      server.close();
    } else {
      socket.write(`Servidor: ${input}`);
    }
  });

  socket.on('data', (data) => {
    console.log(data.toString());
    sendMessage(data.toString());
  });

  socket.on('end', () => {
    console.log('Cliente desconectado:', socket.remoteAddress);
  });

  socket.on('error', (error) => {
    console.error('Erro de conexão:', error);
  });
});

server.listen(PORT, () => {
  console.log('Servidor escutando na porta', PORT);
});
