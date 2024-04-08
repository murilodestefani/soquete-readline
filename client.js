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

  rl.on('line', (input) => {
    if (input.toLowerCase() === 'exit') {
      client.end();
    } else {
      client.write(`Cliente: ${input}`);
    }
  });
});

client.on('data', (data) => {
  console.log(data.toString());
});

client.on('error', (error) => {
  console.error('Erro de conexão:', error);
});

client.on('close', () => {
  console.log('Conexão fechada');
});
