# 💡 Comments System API

Este projeto tem o objetivo resolver um desafio proposto pelo meu amigo [Tiago Lopes](https://github.com/tiagolopesdev).

<!-- # Tópicos -->

- [💡 Comments System API](#-comments-system-api)
  - [Desafio](#desafio)
  - [Status do Projeto](#status-do-projeto)
  - [Funcionalidades](#funcionalidades)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Extras](#extras)
  
## Desafio

- [x] O sistema deve permitir a listagem, atualização, edição e inclusão de comentários, os mesmos teram os seguintes campos: titulo, corpo da mensagem, owner (somente o nome de quem criou a mensagem), upVote(votos favoráveis), downVote(votos desfavoráveis) e a situação atual(positiva ou negativa para cada comentário).
- [x] - O fluxo de requisições deve ser apresentado com o uso do swagger ou postman(O uso de cada um fica a criterio seu).
- [x] O sistema deve utilizar um banco de dados de sua preferência.

## Status do Projeto

Finalizado. O desafio foi concluído, mas estou aguardando um Code Review com o responsável pelo desafio.

## Funcionalidades

- [x] Cadastro, listagem, edição e remoção de comentários no banco de dados (PostgreSQL).
- [x] Atribuir `likes` (upVotes) e `dislikes` (downVotes) em qualquer comentário.
- [x] Alterar a situação (neutra, positiva ou negativa) de qualquer comentário.

## Tecnologias Utilizadas

- `node.js`
- `Express`
- `TypeScript`
- `Sequelize`
- `PostgreSQL`

## Extras

- `ESLint`
