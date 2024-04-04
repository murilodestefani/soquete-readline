const net = require('net');

const PORT = 12345;

const server = net.createServer((socket) => {
  console.log('Cliente conectado:', socket.remoteAddress);

  socket.on('data', (data) => {
    console.log('Mensagem do cliente:', data.toString());

    socket.write('Mensagem recebida pelo servidor: ' + data.toString());
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
