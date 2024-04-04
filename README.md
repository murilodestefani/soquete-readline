# Socket + Headline

![javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![nodejs](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

Este guia fornece instruções passo a passo sobre como baixar e executar um projeto de comunicação entre cliente e servidor em JavaScript e Node.js.

## Pré-requisitos

Certifique-se de ter o Node.js instalado em seu computador. Você pode baixá-los e instalá-los a partir do site oficial do Node.js.

## Guia

1. **Clone o repositório:**

   Abra o terminal e execute o seguinte comando:

   ```bash
   git clone https://github.com/murilodestefani/soquete-readline.git
   ```

2. **Navegue até o diretório do projeto:**

   Use o comando `cd` para entrar no diretório do projeto que você acabou de clonar:

   ```bash
   cd soquete-readline
   ```

3. **Execute o Servidor:**

   Abra um terminal e execute o comando abaixo para deixar o `servidor` rodando em segundo plano:

   ```bash
   node servidorReadline.js
   ```

   ![Servidor Screenshot](./screenshots/server.png)

4. **Execute o Client:**

   Abra um outro terminal e execute o comando abaixo para rodar o `client` que será o responsável por enviar mensagens ao `servidor`:

   ```bash
   node client.js
   ```

   ![Cliente Screenshot](./screenshots/client.png)

5. **Enviando Mensagem:**

   No terminal do `client` digite uma mensagem e tecle enter assim como a imagem de exemplo abaixo:
   ![Client Mensagem Screenshot](./screenshots/msgClient.png)
   Se a mensagem for enviada e recebida com sucesso pelo servidor o prompt irá pedir uma nova mensagem, mas se você desejar encerrar a comunicação digite a palavra `exit` e tecle enter.

6. **Resposta do Servidor**

   No terminal do `servidor` se a mensagem enviada pelo cliente for recebida com sucesso aparecerá o conteúdo da mensagem enviada pelo `cliente`:
   ![Servidor Resposta Screenshot](./screenshots/responseServer.png)
