# api-rest-express

## Pré-requisitos:

1. Ambiente local de desenvolvimento:

- Se Windows: instalações [node e npm](https://treehouse.github.io/installation-guides/windows/node-windows.html) e [MySQL](https://dev.mysql.com/downloads/installer/);
- Se Linux: instalações [node e npm](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04) e [MySQL](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-22-04);

2. Para acessar o banco de dados, caso não queira manipular o BD via linha de comando, pode utilizar um ou mais softwares clientes, como [MySQL Workbench](https://www.mysql.com/products/workbench/) ou [DBeaver](https://dbeaver.io/).

3. Para usuários Windows recomenda-se sempre utilizar o [Git Bash for Windows](https://gitforwindows.org/) a fim de executar comandos similares ao estilo linux das aulas. Pode usar o terminal do [Visual Studio Code](https://code.visualstudio.com/).


## Instalação e Configuração

1. Fazer o download/fork/cópia deste repositório.
2. Instalar via npm o projeto:

```console
dev@pc:~$ cp .env.example .env
dev@pc:~$ npm install
```

3. Verifique se o primeiro comando resultou na cópia correta do .env.example para .env. Em seguida preencha corretamente todas as variáveis de ambiente do arquivo .env.

4. Para executar o projeto, acesse o diretório da aplicação e execute um dos comandos abaixo:

```console
dev@pc:~$ npm run dev
#ou
dev@pc:~$ npx nodemon
```
