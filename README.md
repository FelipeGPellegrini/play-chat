# Projeto Play Chat

O Play Chat é um sistema de chat em tempo real desenvolvido com tecnologias modernas e bastante utilizadas no mercado de trabalho. O projeto é dividido em frontend e backend, utilizando React para o frontend, NestJS como framework para o backend, e PostgreSQL como banco de dados. A aplicação foi planejada para fornecer uma experiência de chat intuitiva e em tempo real para os usuários.

# Tecnologias

<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
</svg>
<img src="">
<img src="">
<img src="">
<img src="">
<img src="">


# Arquitetura

# Backend

O backend foi desenvolvido utilizando o framework NestJS, que tem como base o Node.js. O banco de dados PostgreSQL foi escolhido para armazenar dados relacionados aos usuários.
O PostgreSQL foi hospedado na AWS RDS, e o código em NestJS na adaptable.io.

# Frontend

O frontend foi desenvolvido utilizando React, oferecendo uma interface de usuário responsiva e interativa. O Sass foi adotado para estilizar os componentes. E está hospedado no netlify.

# Problemas Conhecidos e Possíveis Melhorias

Erro de CORS: O servidor ao se comunicar com o frontend dependendo do navegador pode emitir erro de Cors, isso será resolvido em breve.

Tela de Cadastro Separada do Login: Atualmente, o projeto possui uma tela de autenticação combinada. Para separar as telas de cadastro e login, podem ser feitas alterações no frontend e backend para criar rotas distintas e interfaces de usuário.

Esqueci a senha: Poderá ser implementado um método para recuperar a senha, no qual seria por meio de verificação via email utilizado no cadastro.

Usuário único por sessão: Cada sessão o usuário pode colocar qualquer nome, logo podendo repetir dos usuários que já estão conectados. Penso em alterar isso para cada usuário da sessão ter um nome único.

# Conclusão 

O Play Chat oferece uma plataforma de chat em tempo real robusta, com potencial para melhorias e expansões futuras. A documentação fornece uma visão geral do projeto, detalhes sobre a arquitetura e instruções de configuração para facilitar o desenvolvimento contínuo.

# Como executar o projeto?

1 - Clone o repositório com: git clone https://github.com/FelipeGPellegrini/play-chat.git
                             cd play-chat

2- Entre na pasta play-chat-front

3- Rode o comando 'yarn' ou 'npm install' para instalar as dependências.

4- Altere o link:'https://play-chat-deploy.adaptable.app' que está no Componente AuthPage para "localhost:3000", isso vai garantir que o frontend se conecte com o backend que está configurado para rodar nessa porta.

5- Execute o comando 'yarn dev' ou 'npm run dev' para iniciar a aplicação.

6- Agora entre na pasta play-chat-back

7- Execute o comando 'yarn' ou 'npm install' para instalar as dependências.

8- Entre na pasta src e rode o comando "docker-compose up -d" para iniciar o banco de dados com Docker.

9- Configure o arquivo "app.module.ts" com as credenciais do arquivo "docker-compose.yml"

10- Agora basta rodar o comando "nest start" na raíz do projeto.

- Com esses passos você já estará rodando a aplicação no servidor local, caso não tenha modificado a porta estará rodando em: "http://localhost:5173/".


# Imagens do projeto

![image](https://github.com/FelipeGPellegrini/play-chat/assets/107892258/402ddb7c-0750-493f-95bc-bc6be4a14c09)
![image](https://github.com/FelipeGPellegrini/play-chat/assets/107892258/43b60143-6d68-4c80-8078-0305c1c7a5f8)
![image](https://github.com/FelipeGPellegrini/play-chat/assets/107892258/53eec75e-1f63-4486-9ab0-7bdb0a8baf4f)
![image](https://github.com/FelipeGPellegrini/play-chat/assets/107892258/3194c5a6-8794-4348-bb77-8501aeb15dd8)

# Banco de dados (Utilizando o DBeaver como interface gráfica)
![image](https://github.com/FelipeGPellegrini/play-chat/assets/107892258/68427aae-83c1-41c5-ae2d-82274247ca4c)




