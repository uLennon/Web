# SRI

Sistema para reportar incidentes de segurança. A aplicação permite que usuários criem uma conta, façam login e registrem relatos de incidentes, fornecendo um título e descrição. Os incidentes registrados podem ser votados pela comunidade, garantindo que os relatos mais relevantes ou urgentes sejam destacados. A página inicial exibe os incidentes mais populares, organizados conforme a votação dos usuários, promovendo uma forma colaborativa de relatar e discutir situações importantes.

## Tecnologias Utilizadas

- **AdonisJS**: Framework MVC para Node.js que proporciona uma estrutura robusta para o desenvolvimento de aplicações web.
- **Node.js**: Plataforma para execução do código JavaScript no servidor.
- **TypeScript**: Linguagem escolhida para o desenvolvimento.

## Dependências

### Dependências principais:
- `@adonisjs/auth`: Sistema de autenticação para AdonisJS.
- `@adonisjs/core`: Núcleo do AdonisJS, incluindo funcionalidades essenciais.
- `@adonisjs/lucid`: ORM para interagir com bancos de dados.
- `@adonisjs/repl`: Ferramenta de REPL para interagir com a aplicação.
- `@adonisjs/session`: Gerenciamento de sessões.
- `@adonisjs/shield`: Proteção contra ataques como CSRF, XSS.
- `@adonisjs/view`: Renderização de views com templates.

## Instalação do Desenvolvimento

1 - Criar a pasta temporária para o banco SQLite

```console
mkdir tmp
```

2 - Criar o ```.env```

```console
cp .env.example .env
```

3 - Instalar as dependências

```console
npm install
```

## Execução

```console
node ace serve --watch
```
