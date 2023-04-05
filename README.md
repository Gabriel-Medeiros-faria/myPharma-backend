# myPharma-backend

O projeto myPharma foi criado para um desafio técnico como um CRUD em Node.js, React.js e MongoDB. O back-end conta com middlewares de autenticação, princípios do clean code, arquitetura em camadas, cadastro e login de usuários. Para visualizar o front-end do projeto vá para [front-end](https://github.com/Gabriel-Medeiros-faria/myPharma-frontend).

## Instalação
Primeiro instale as dependências do projeto com o comando: `npm i`

## Configuração
De acordo com o arquivo `.env.example`, configure o arquivo `.env` com os valores necessários.

## Execução
Para executar o projeto back-end apenas rode o comando: `npm start`

## Execução dos testes
Para executar os testes configure o `.env.test.example` em seguida use o comando `npm run test`

# Rotas
O back-end do projeto foi criado com o Express.js, abaixo estão as rotas existentes.

## post: /user
Essa rota permite o cadastro de usuários, foi utilizado o Joi para validar o body e o bcrypt para encriptar as senhas. body:

```bash
{
    "name": "joao",
    "email": "joao2@email.com",
    "password": "minhasenha"
}
```

## post: /auth
Essa rota permite o cadastro de usuários, foi utilizado o Joi para validar o body e o bcrypt para encriptar as senhas. body:

```bash
{
    "email": "joao2@email.com",
    "password": "minhasenha"
}
```
retorno:

```bash
{
    "email": "joao2@email.com",
    "name": "joao",
    "token": "312jh3g12hg3j1h2g3j12g32h1g3j1hg3"
}
```
## delete: /auth
Essa rota permite o logout do usuário, saindo da sessão apenas passando o token pelo headers

```bash
{
    "Authorization": "a1b2-23n1-anbv-asn1"
}
```

## get: /products
Essa rota que o usuário pegue todos os produtos do banco de dados. retorno:

```bash
[
  {
    "name": "nome do meu produto",
    "description": "descrição do meu produto",
    "category": "categoria do meu produto",
    "price": "preço do meu produto",
    "image": "imagem do meu produto"
  },
  {
    "name": "nome do meu produto",
    "description": "descrição do meu produto",
    "category": "categoria do meu produto",
    "price": "preço do meu produto",
    "image": "imagem do meu produto"
  },
  {
    "name": "nome do meu produto",
    "description": "descrição do meu produto",
    "category": "categoria do meu produto",
    "price": "preço do meu produto",
    "image": "imagem do meu produto"
  },
]
```
## get: /products/:id
Essa rota permite que o usuário pegue apenas um produto pelo id passando por parâmetro. retorno:

```bash
{
    "name": "nome do meu produto",
    "description": "descrição do meu produto",
    "category": "categoria do meu produto",
    "price": "preço do meu produto",
    "image": "imagem do meu produto"
}
```

## post: /cart
Essa rota permite que o usuário insira o produto que deseja no carrinho junto com o id do usuário para identifica-lo depois. body:

```bash
{
    "name": "nome do meu produto",
    "description": "descrição do meu produto",
    "category": "categoria do meu produto",
    "price": "preço do meu produto",
    "image": "imagem do meu produto",
    "userId": "id do meu usuário"
}
```
## get: /cart
Essa rota permite que o usuário veja os produtos em seu carrinho. retorno:

```bash
[
  {
      "name": "nome do meu produto",
      "description": "descrição do meu produto",
      "category": "categoria do meu produto",
      "price": "preço do meu produto",
      "image": "imagem do meu produto",
      "userId": "id do meu usuário"
  }
]
  
```

## delete: /cart
Essa rota permite que o usuário exclua o produto que deseja do seu carrinho passando o id por parâmetro
