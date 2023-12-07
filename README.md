# Projeto Play Chat

O Play Chat é um sistema de chat em tempo real desenvolvido com tecnologias modernas e bastante utilizadas no mercado de trabalho. O projeto é dividido em frontend e backend, utilizando React para o frontend, NestJS como framework para o backend, e PostgreSQL como banco de dados. A aplicação foi planejada para fornecer uma experiência de chat intuitiva e em tempo real para os usuários.

# Tecnologias utilizadas

<div display="flex" padding="10px" justify-content="center">
  <img width="80px" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg">
<img width="80px" src="https://sass-lang.com/assets/img/styleguide/seal-color.png">
<img width="80px"  src="https://raw.githubusercontent.com/microsoft/TypeScript-Website/f407e1ae19e5e990d9901ac8064a32a8cc60edf0/packages/typescriptlang-org/static/branding/ts-logo-512.svg">
<img width="80px" src="https://seeklogo.com/images/N/nodejs-logo-54107C5EDD-seeklogo.com.png?v=638179441380000000">
<img width="80px"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NestJS.svg/1200px-NestJS.svg.png">
<img width="80px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png">
</div>



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




