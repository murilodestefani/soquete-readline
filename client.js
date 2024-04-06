const net = require('net');
const readline = require('readline');

const SERVER_IP = '127.0.0.1';
const SERVER_PORT = 12345;

const client = net.createConnection({
  host: SERVER_IP,
  port: SERVER_PORT,
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

client.on('connect', () => {
  console.log('Conectado ao servidor');

  rl.question('Digite a mensagem para enviar ao servidor: ', (message) => {
    client.write(message);
  });
});

client.on('data', (data) => {
  console.log('\nMensagem do servidor:', data.toString());

  rl.question(
    'Digite a próxima mensagem para enviar ao servidor (ou digite "exit" para sair): ',
    (message) => {
      if (message.toLowerCase() === 'exit') {
        client.end();
      } else {
        client.write(message);
      }
    }
  );
});

client.on('error', (error) => {
  console.error('Erro de conexão:', error);
});

client.on('close', () => {
  console.log('Conexão fechada');
});
