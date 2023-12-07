# Projeto Play Chat

O Play Chat é um sistema de chat em tempo real desenvolvido com tecnologias modernas e bastante utilizadas no mercado de trabalho. O projeto é dividido em frontend e backend, utilizando React para o frontend, NestJS como framework para o backend, e PostgreSQL como banco de dados. A aplicação foi planejada para fornecer uma experiência de chat intuitiva e em tempo real para os usuários.

# Tecnologias


<img width="50px" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg">
<img width="50px" src="https://sass-lang.com/assets/img/styleguide/seal-color.png">
<img width="50px"  src="https://raw.githubusercontent.com/microsoft/TypeScript-Website/f407e1ae19e5e990d9901ac8064a32a8cc60edf0/packages/typescriptlang-org/static/branding/ts-logo-512.svg">
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#f50057" d="M24.5,32.88c0,0-0.01-0.04-0.02-0.12C24.5,32.84,24.5,32.88,24.5,32.88z"></path><path fill="#f50057" d="M27.375,8.625c0,0-0.375-1.375,0.125-2.5s0.5-1.875-0.5-3c2-0.125,2.75,1.25,2.75,1.25l0.025,0.159 c0.118,0.766-0.278,1.494-0.946,1.888C28.219,6.781,27.563,7.437,27.375,8.625z"></path><path fill="#f50057" d="M41.63,36.24c0.02-0.21,0.34-3.04-0.38-4.36c-1.5,4.24-3,8.12-7.37,10.87 c0.62-1.25,1.62-3.25,2.62-6.25c-3,4-9,8-13.5,8.25c3.04-1.68,4.75-3.84,5.5-5.25c0,0-1.75,0.5-3.88,0.75 c2.88-1.75,4.88-4.87,3.88-9.75c-2,6.25-4.75,8.25-8.38,8.62c-3.62,0.38-6.87-1.5-6.87-1.5l1.25-0.12c0,0-3.25-2.5-2.12-5.75 c0.05-0.16,0.11-0.31,0.18-0.45c0.82-1.82,3.61-0.9,3.32,1.07v0.01c0,0,0.87,2.37,3.24,1.74c0.76-1.24,1.26-2.5,1.26-2.5l0.37,1.63 c0,0,1.75-0.75,1.75-2.13c1.5,0.57,1.88,1.28,1.97,1.59c-0.26-1.4-2.52-11.03-14.49-10.89l-2.09,1.94 c-0.14,0.13-0.36,0.02-0.34-0.16L7.71,22l0.14-0.14c-0.04,0.01-0.09,0-0.13,0L7.71,22l-0.82,0.76c-0.14,0.13-0.36,0.02-0.34-0.16 l0.1-1.02c-1.74-0.74-1.9-2.7-1.9-2.7S2.58,18.27,3.5,15.5C4,14,5.2,13.85,5.71,13.97c0.65,0.15,1.32,0.16,1.94-0.09 c0.9-0.36,2.05-1.05,2.85-2.38C12,9,14.25,8,19.12,8c6.45,0,9.05,1.98,9.35,2.22c-0.18-0.21-1.27-1.66,1.03-3.84 c2.27-2.16,1.86-2.67,1.77-2.75c0.34,0.1,4.75,1.6,5.23,7.37c0.5,6-6.5,7.25-6.5,7.25s9,1.75,9.12-6.75 c1.76,1,5.38,4.75,5.88,12.88C45.49,32.26,41.84,36.03,41.63,36.24z"></path><path fill="#f50057" d="M7.85,21.86L7.71,22l0.01-0.14C7.76,21.86,7.81,21.87,7.85,21.86z"></path><path fill="#f50057" d="M7.85,21.86L7.71,22l0.01-0.14C7.76,21.86,7.81,21.87,7.85,21.86z"></path>
</svg>
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




