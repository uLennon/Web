# SRI

Sistema para reportar incidentes de segurança.

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
npm ace serve --watch
```