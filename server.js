const net = require('net');
const readline = require('readline');

const PORT = 12345;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const server = net.createServer((socket) => {
  console.log('Cliente conectado:', socket.remoteAddress);

  rl.question('Digite a mensagem para o cliente: ', (message) => {
    socket.write(message);
  });

  socket.on('data', (data) => {
    console.log('\nMensagem do cliente:', data.toString());

    rl.question(
      'Digite a próxima mensagem para enviar ao cliente: ',
      (message) => {
        socket.write(message);
      }
    );
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
